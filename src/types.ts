/**
 * Configuration and type re-exports for the otari gateway client.
 *
 * Response/request types come from the OpenAPI-generated core in
 * `./_client` (modeled from the *otari* spec, not OpenAI's), re-exported here
 * so consumers can name them without reaching into the generated package.
 */

// ---------------------------------------------------------------------------
// Re-export the generated models that callers interact with directly.
// ---------------------------------------------------------------------------
export type {
  ChatCompletion,
  ChatCompletionChunk,
  ChatCompletionRequest,
  CreateEmbeddingResponse,
  EmbeddingRequest,
  ImageGenerationRequest,
  ImagesResponse,
  MessageResponse,
  MessagesRequest,
  ModelListResponse,
  ModelObject,
  ModerationRequest,
  ModerationResponse,
  ModerationResult,
  RerankRequest,
  RerankResponse,
  ResponsesRequest,
  RRRerankResult as RerankResult,
} from "./_client/index.js";

// ---------------------------------------------------------------------------
// Batch types
// ---------------------------------------------------------------------------

/**
 * Batch response with the gateway-injected `provider` field.
 *
 * The gateway adds a `provider` string to the response on `POST /v1/batches`.
 * The generated batch responses are untyped (`any`), so this captures the
 * provider field for callers who need it.
 */
export type BatchWithProvider = { id: string; status: string; provider: string } & Record<
  string,
  unknown
>;

export interface BatchRequestItem {
  custom_id: string;
  body: Record<string, unknown>;
}

export interface CreateBatchParams {
  model: string;
  requests: BatchRequestItem[];
  completion_window?: string;
  metadata?: Record<string, string>;
}

export interface ListBatchesOptions {
  after?: string;
  limit?: number;
}

export interface BatchResultError {
  code: string;
  message: string;
}

export interface BatchResultItem {
  custom_id: string;
  result?: Record<string, unknown>;
  error?: BatchResultError;
}

export interface BatchResult {
  results: BatchResultItem[];
}

// ---------------------------------------------------------------------------
// Rerank params
// ---------------------------------------------------------------------------

/** Parameters for a rerank request. */
export interface RerankParams {
  /** Provider-prefixed model ID, e.g. "cohere:rerank-v3.5" */
  model: string;
  /** The search query */
  query: string;
  /** Documents to rerank */
  documents: string[];
  /** Max results to return */
  top_n?: number;
  /** Per-document token truncation limit */
  max_tokens_per_doc?: number;
  /** User ID for usage attribution (gateway) */
  user?: string;
}

// ---------------------------------------------------------------------------
// Image generation params
// ---------------------------------------------------------------------------

/** Parameters for an image-generation request. */
export interface ImageGenerationParams {
  /** Provider-prefixed model ID, e.g. "openai:dall-e-3". */
  model: string;
  /** Text prompt describing the desired image(s). */
  prompt: string;
  /** Number of images to generate. */
  n?: number;
  /** Image size, e.g. "1024x1024". */
  size?: string;
  /** Image quality (provider-specific). */
  quality?: string;
  /** Response format: "url" or "b64_json". */
  response_format?: string;
  /** Image style (provider-specific). */
  style?: string;
  /** User ID for usage attribution (gateway). */
  user?: string;
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// Audio params
// ---------------------------------------------------------------------------

/** Parameters for a text-to-speech (speech) request. */
export interface SpeechParams {
  /** Provider-prefixed model ID, e.g. "openai:tts-1". */
  model: string;
  /** Text to synthesize. */
  input: string;
  /** Voice to use, e.g. "alloy". */
  voice: string;
  /** Output audio format, e.g. "mp3". */
  response_format?: string;
  /** Playback speed multiplier. */
  speed?: number;
  /** Optional voice/style instructions (provider-specific). */
  instructions?: string;
  /** User ID for usage attribution (gateway). */
  user?: string;
  [key: string]: unknown;
}

/** Parameters for an audio transcription request. */
export interface TranscriptionParams {
  /** Provider-prefixed model ID, e.g. "openai:whisper-1". */
  model: string;
  /**
   * Raw audio bytes to transcribe, uploaded as the multipart `file` field.
   * Either a `Blob` or any binary buffer (`Uint8Array`, `ArrayBuffer`).
   */
  file: Blob | Uint8Array | ArrayBuffer;
  /**
   * Filename for the multipart upload. Some providers infer the audio format
   * from its extension. Defaults to "audio".
   */
  filename?: string;
  /** Spoken language hint (ISO-639-1). */
  language?: string;
  /** Optional prompt to guide the transcription. */
  prompt?: string;
  /** Response format: "json", "text", "srt", "verbose_json", or "vtt". */
  response_format?: string;
  /** Sampling temperature. */
  temperature?: number;
  /** User ID for usage attribution (gateway). */
  user?: string;
  [key: string]: unknown;
}

/**
 * Result of an audio transcription request.
 *
 * Exactly one field is populated, chosen by the gateway response's content
 * type: `json` for the default `json` / `verbose_json` formats, `text` for the
 * plain `text` / `srt` / `vtt` formats.
 */
export interface TranscriptionResult {
  /** Parsed JSON response, for `json` / `verbose_json` formats. */
  json?: Record<string, unknown>;
  /** Raw text response, for `text` / `srt` / `vtt` formats. */
  text?: string;
}

// ---------------------------------------------------------------------------
// Moderation params / extended responses
// ---------------------------------------------------------------------------

/** Parameters for a moderation request. */
export interface ModerationCreateParams {
  model: string;
  input: string | string[] | Array<Record<string, unknown>>;
  [key: string]: unknown;
}

/** Default moderation response shape. */
export interface ModerationCreateResponse {
  id: string;
  model: string;
  results: Array<{
    flagged: boolean;
    categories: Record<string, boolean>;
    category_scores: Record<string, number>;
    [key: string]: unknown;
  }>;
}

/** Extended moderation result with optional `provider_raw` (returned with `includeRaw: true`). */
export interface ModerationResultExt {
  category_applied_input_types?: Record<string, string[]>;
  category_scores: Record<string, number>;
  categories: Record<string, boolean>;
  flagged: boolean;
  provider_raw?: unknown;
}

/** Extended moderation response used when `includeRaw: true` is requested. */
export interface ModerationResponseExt {
  id: string;
  model: string;
  results: ModerationResultExt[];
}

// ---------------------------------------------------------------------------
// Client options
// ---------------------------------------------------------------------------

/**
 * Options for constructing an {@link OtariClient}.
 *
 * Auth resolution order (mirrors the Python SDK):
 *  1. Explicit `platformToken` -> platform mode (Bearer in Authorization header)
 *  2. `OTARI_AI_TOKEN` (or legacy `GATEWAY_PLATFORM_TOKEN`) env var (when no
 *     `apiKey`) -> platform mode
 *  3. `apiKey` or `GATEWAY_API_KEY` env var -> non-platform mode (`Otari-Key` header)
 *  4. No credentials -> non-platform mode, no auth header
 */
export interface OtariClientOptions {
  /**
   * Base URL of the gateway (e.g. "http://localhost:8000").
   * Falls back to `GATEWAY_API_BASE`; in platform mode defaults to
   * `https://api.otari.ai`.
   */
  apiBase?: string;

  /**
   * API key for non-platform mode. Sent via `Otari-Key: Bearer <key>`.
   * Falls back to `GATEWAY_API_KEY`.
   */
  apiKey?: string;

  /**
   * Platform token for platform mode. Sent as Bearer in the Authorization
   * header. Falls back to `OTARI_AI_TOKEN` (or legacy `GATEWAY_PLATFORM_TOKEN`).
   */
  platformToken?: string;

  /**
   * Admin/master credential for the control-plane (management) endpoints, sent
   * as `Authorization: Bearer <key>`. Falls back to `GATEWAY_ADMIN_KEY`, then
   * to `platformToken`.
   */
  adminKey?: string;

  /** Additional default headers to send with every request. */
  defaultHeaders?: Record<string, string>;

  /**
   * Custom `fetch` implementation, shared across the generated core, the SSE
   * streaming shim, and the control-plane. Defaults to the global `fetch`.
   */
  fetch?: typeof fetch;
}
