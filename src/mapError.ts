/**
 * Unified gateway-error mapping for the otari client.
 *
 * Mirrors the Python reference's `_base.py`: a single status -> typed-error
 * table that the SDK applies in *both* auth modes (platform and non-platform),
 * so callers always get one of the typed exceptions in `./errors`.
 *
 * The generated core (`./_client`) throws a `ResponseError` carrying the raw
 * `fetch` `Response` on any non-2xx status; the SSE streaming shim also gets a
 * raw failed `Response`. Both feed through {@link mapResponseError} /
 * {@link mapResponse}, which read the status, headers, and `{detail}` body and
 * return the appropriate typed error.
 */

import {
  AuthenticationError,
  BatchNotCompleteError,
  GatewayTimeoutError,
  InsufficientFundsError,
  ModelNotFoundError,
  OtariError,
  RateLimitError,
  UnsupportedCapabilityError,
  UpstreamProviderError,
} from "./errors.js";

export const PROVIDER_NAME = "gateway";

/**
 * Locked phrasing the gateway uses to signal that the selected provider does
 * not support a moderation request (plain or multimodal).
 */
const UNSUPPORTED_MODERATION_RE = /does not support (?:multimodal )?moderation/;

/** Pull the gateway's human-readable detail out of a parsed error body. */
function extractDetail(body: unknown, fallback: string): string {
  if (typeof body === "string" && body) {
    try {
      const parsed = JSON.parse(body) as Record<string, unknown>;
      return detailFromObject(parsed) ?? body;
    } catch {
      return body;
    }
  }
  if (body && typeof body === "object") {
    return detailFromObject(body as Record<string, unknown>) ?? fallback;
  }
  return fallback;
}

function detailFromObject(parsed: Record<string, unknown>): string | undefined {
  const detail = parsed.detail ?? parsed.message ?? parsed.error;
  if (typeof detail === "string") return detail;
  if (detail != null) return String(detail);
  return undefined;
}

function parseUnsupportedProvider(detail: string): string {
  const match = detail.match(/Provider\s+(\S+)\s+does not/);
  return match ? match[1] : "unknown";
}

function extractBatchId(message: string): string | undefined {
  return message.match(/Batch '([^']+)'/)?.[1];
}

function extractStatus(message: string): string | undefined {
  return message.match(/status: (\w+)/)?.[1];
}

interface MappedErrorInput {
  status: number;
  detail: string;
  correlationId?: string;
  retryAfter?: string;
  originalError?: Error;
}

/**
 * Core status -> typed-error table. Applied in both auth modes (mirrors the
 * Python reference). `UnsupportedCapabilityError` is surfaced for the locked
 * moderation 400; every other case maps purely on status.
 */
function buildError(input: MappedErrorInput): OtariError {
  const { status, detail, correlationId, retryAfter, originalError } = input;
  const message = correlationId ? `${detail} (correlation_id=${correlationId})` : detail;
  const base = {
    message,
    statusCode: status,
    originalError,
    providerName: PROVIDER_NAME,
  };

  if (status === 400 && UNSUPPORTED_MODERATION_RE.test(detail)) {
    return new UnsupportedCapabilityError({
      ...base,
      provider: parseUnsupportedProvider(detail),
      capability: detail.includes("multimodal") ? "multimodal_moderation" : "moderation",
    });
  }

  switch (status) {
    case 401:
    case 403:
      return new AuthenticationError(base);
    case 402:
      return new InsufficientFundsError(base);
    case 404:
      return new ModelNotFoundError(base);
    case 409:
      return new BatchNotCompleteError({
        ...base,
        batchId: extractBatchId(detail),
        batchStatus: extractStatus(detail),
      });
    case 429:
      return new RateLimitError({ ...base, retryAfter });
    case 504:
      return new GatewayTimeoutError(base);
    default:
      if (status === 502 || (status >= 500 && status < 600)) {
        return new UpstreamProviderError(base);
      }
      return new OtariError(base);
  }
}

function headerGet(headers: Headers | undefined, name: string): string | undefined {
  return headers?.get(name) ?? undefined;
}

/**
 * Map a raw failed `fetch` `Response` (status + headers + body) to a typed
 * otari error. Used by the streaming shim and the raw-fetch helpers.
 */
export async function mapResponse(response: Response, originalError?: Error): Promise<OtariError> {
  let bodyText = "";
  try {
    bodyText = await response.text();
  } catch {
    // Body already consumed or unavailable; fall back to status text.
  }
  const detail = extractDetail(bodyText, response.statusText || "An error occurred");
  return buildError({
    status: response.status,
    detail,
    correlationId: headerGet(response.headers, "x-correlation-id"),
    retryAfter: headerGet(response.headers, "retry-after"),
    originalError,
  });
}

/**
 * Map a generated-core `ResponseError`-like value to a typed otari error.
 *
 * The generated `ResponseError` carries the raw `Response` on its `.response`
 * field. Anything that isn't a recognizable `ResponseError` (network failure,
 * `RequiredError`, etc.) is returned unchanged so it propagates as-is.
 */
export async function mapError(error: unknown): Promise<unknown> {
  if (error && typeof error === "object" && "response" in error) {
    const response = (error as { response: unknown }).response;
    if (response instanceof Response) {
      const originalError = error instanceof Error ? error : undefined;
      return mapResponse(response, originalError);
    }
  }
  return error;
}
