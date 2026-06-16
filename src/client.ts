/**
 * OtariClient: TypeScript client for the otari gateway.
 *
 * A thin, ergonomic shell over the OpenAPI-generated core in
 * `./_client`. Non-streaming calls go through the generated typed API classes
 * (returning typed models such as `ChatCompletion`); streaming calls go through
 * the hand-written SSE shim in `./streaming`; generated `ResponseError`s are
 * mapped to the typed errors in `./errors` via `./mapError`.
 *
 * @example
 * ```ts
 * import { OtariClient } from "@mozilla-ai/otari";
 *
 * const client = new OtariClient({
 *   apiBase: "http://localhost:8000",
 *   platformToken: "tk_xxx",
 * });
 *
 * const res = await client.completion({
 *   model: "openai:gpt-4o-mini",
 *   messages: [{ role: "user", content: "Hello" }],
 * });
 * console.log(res.choices[0].message.content);
 * ```
 */

import {
  BatchesApi,
  ChatApi,
  type ChatCompletion,
  ChatCompletionRequestFromJSON,
  Configuration,
  CountTokensRequestFromJSON,
  type CountTokensResponse,
  CreateBatchRequestFromJSON,
  type CreateEmbeddingResponse,
  EmbeddingRequestFromJSON,
  EmbeddingsApi,
  ImageGenerationRequestFromJSON,
  ImagesApi,
  type MessageResponse,
  MessagesApi,
  MessagesRequestFromJSON,
  type ModelObject,
  ModelsApi,
  ModerationRequestFromJSON,
  type ModerationResponse,
  ModerationsApi,
  RerankApi,
  RerankRequestFromJSON,
  type RerankResponse,
  ResponsesApi,
  ResponsesRequestFromJSON,
} from "./_client/index.js";
import { ControlPlane } from "./controlPlane.js";
import { OtariError } from "./errors.js";
import { mapError, mapResponse } from "./mapError.js";
import { type ChatCompletionChunk, Stream, type StreamKind } from "./streaming.js";
import type {
  BatchResult,
  BatchWithProvider,
  CreateBatchParams,
  ImageGenerationParams,
  ListBatchesOptions,
  ModerationCreateParams,
  ModerationCreateResponse,
  ModerationResponseExt,
  OtariClientOptions,
  RerankParams,
  SpeechParams,
  TranscriptionParams,
} from "./types.js";

const GATEWAY_HEADER_NAME = "Otari-Key";
const DEFAULT_PLATFORM_API_BASE = "https://api.otari.ai";

const ENV_API_BASE = "GATEWAY_API_BASE";
const ENV_API_KEY = "GATEWAY_API_KEY";
const ENV_ADMIN_KEY = "GATEWAY_ADMIN_KEY";
// Canonical platform-token env var, plus a legacy alias kept for back-compat.
// Matches the gateway server's own alias chain (OTARI_AI_TOKEN preferred).
const ENV_PLATFORM_TOKEN = "OTARI_AI_TOKEN";
const ENV_PLATFORM_TOKEN_LEGACY = "GATEWAY_PLATFORM_TOKEN";

/**
 * Client for the otari gateway.
 *
 * Supports two authentication modes (mirroring the Python SDK and the
 * TypeScript SDK's prior `openai`-wrapping implementation):
 *
 * - **Platform mode**: a Bearer token in the standard `Authorization` header
 *   (activated by `platformToken` / `OTARI_AI_TOKEN`).
 * - **Non-platform mode**: an API key in the custom `Otari-Key` header
 *   (`apiKey` / `GATEWAY_API_KEY`).
 *
 * In both modes, gateway errors are mapped to the typed exceptions in
 * `./errors`.
 */
export class OtariClient {
  /** Whether the client is operating in platform mode. */
  readonly platformMode: boolean;

  /** Resolved gateway base URL (including the `/v1` suffix). */
  private readonly baseURL: string;

  /** Gateway root URL (without `/v1`); the generated paths add `/v1` themselves. */
  private readonly gatewayRoot: string;

  /** Per-mode auth + default headers, fed into the core and the streaming shim. */
  private readonly defaultHeaders: Record<string, string>;

  /** Admin/master credential for the control-plane (management) endpoints. */
  private readonly adminToken?: string;

  /** Shared fetch implementation (the test seam) used by core, shim, and control-plane. */
  private readonly fetchApi: typeof fetch;

  private readonly chatApi: ChatApi;
  private readonly responsesApi: ResponsesApi;
  private readonly embeddingsApi: EmbeddingsApi;
  private readonly moderationsApi: ModerationsApi;
  private readonly rerankApi: RerankApi;
  private readonly messagesApi: MessagesApi;
  private readonly modelsApi: ModelsApi;
  private readonly batchesApi: BatchesApi;
  private readonly imagesApi: ImagesApi;

  private cachedControlPlane?: ControlPlane;

  constructor(options: OtariClientOptions = {}) {
    const platformToken =
      options.platformToken ??
      process.env[ENV_PLATFORM_TOKEN] ??
      process.env[ENV_PLATFORM_TOKEN_LEGACY];
    const apiKey = options.apiKey ?? process.env[ENV_API_KEY] ?? "";

    // Platform mode activates when a platformToken is available and the caller
    // hasn't explicitly passed an apiKey (which forces non-platform mode).
    const willUsePlatformMode = Boolean(platformToken) && !options.apiKey;

    // In platform mode, fall back to the hosted otari.ai gateway so that
    // `new OtariClient({ platformToken })` works with no further setup. For
    // standalone gateways the caller must supply apiBase.
    const rawBase =
      options.apiBase ??
      process.env[ENV_API_BASE] ??
      (willUsePlatformMode ? DEFAULT_PLATFORM_API_BASE : undefined);

    if (!rawBase) {
      throw new Error(
        `api_base is required for the gateway client. ` +
          `Pass it as options.apiBase or set the ${ENV_API_BASE} environment variable.`,
      );
    }

    // Ensure the base URL includes /v1 since the gateway expects
    // OpenAI-compatible paths like /v1/chat/completions.
    const cleaned = rawBase.replace(/\/+$/, "");
    const apiBase = cleaned.endsWith("/v1") ? cleaned : `${cleaned}/v1`;
    this.baseURL = apiBase;
    this.gatewayRoot = apiBase.replace(/\/v1$/, "");

    const headers: Record<string, string> = { ...options.defaultHeaders };

    // Auth resolution (same logic as the Python reference / prior TS SDK):
    // 1. Explicit platformToken -> platform mode (Bearer Authorization)
    // 2. OTARI_AI_TOKEN (or legacy GATEWAY_PLATFORM_TOKEN) env + no apiKey
    //    option -> platform mode
    // 3. Otherwise -> non-platform mode (Otari-Key header)
    if (platformToken && !options.apiKey) {
      this.platformMode = true;
      headers.Authorization = `Bearer ${platformToken}`;
    } else {
      this.platformMode = false;
      if (apiKey) {
        headers[GATEWAY_HEADER_NAME] = `Bearer ${apiKey}`;
      }
    }
    this.defaultHeaders = headers;

    // Control-plane (management) auth: `Authorization: Bearer <admin/master
    // key>`, distinct from the `Otari-Key` virtual key. In platform mode the
    // platform token doubles as that bearer.
    this.adminToken = options.adminKey ?? process.env[ENV_ADMIN_KEY] ?? platformToken;

    // One shared fetch implementation across the generated core, the streaming
    // shim, and the control-plane — the single seam tests mock.
    this.fetchApi = options.fetch ?? globalThis.fetch;

    // The generated operation paths already include `/v1`, so the core's
    // basePath is the gateway root. Per-mode auth + default headers are passed
    // through Configuration.headers (merged onto every request).
    const config = new Configuration({
      basePath: this.gatewayRoot,
      headers: this.defaultHeaders,
      fetchApi: this.fetchApi,
    });

    this.chatApi = new ChatApi(config);
    this.responsesApi = new ResponsesApi(config);
    this.embeddingsApi = new EmbeddingsApi(config);
    this.moderationsApi = new ModerationsApi(config);
    this.rerankApi = new RerankApi(config);
    this.messagesApi = new MessagesApi(config);
    this.modelsApi = new ModelsApi(config);
    this.batchesApi = new BatchesApi(config);
    this.imagesApi = new ImagesApi(config);
  }

  /**
   * Typed client for the management endpoints (keys, users, budgets, pricing, usage).
   *
   * Requires an admin credential: pass `adminKey` (the gateway master key), set
   * `GATEWAY_ADMIN_KEY`, or use `platformToken` (which doubles as the
   * control-plane bearer in platform mode).
   */
  get controlPlane(): ControlPlane {
    if (!this.adminToken) {
      throw new OtariError({
        message:
          "control-plane management requires an admin credential; pass adminKey (the gateway master key) or use platformToken",
      });
    }
    this.cachedControlPlane ??= new ControlPlane(this.gatewayRoot, this.adminToken, this.fetchApi);
    return this.cachedControlPlane;
  }

  // -- Chat completions -----------------------------------------------------

  /** Create a chat completion (non-streaming). */
  async completion(
    params: { model: string; messages: unknown[]; stream?: false } & Record<string, unknown>,
  ): Promise<ChatCompletion>;

  /** Create a chat completion (streaming). */
  async completion(
    params: { model: string; messages: unknown[]; stream: true } & Record<string, unknown>,
  ): Promise<AsyncIterable<ChatCompletionChunk>>;

  /**
   * Create a chat completion.
   *
   * When `stream: true` is set, returns an `AsyncIterable` of typed
   * `ChatCompletionChunk`s; otherwise a typed `ChatCompletion`.
   */
  async completion(
    params: { model: string; messages: unknown[]; stream?: boolean } & Record<string, unknown>,
  ): Promise<ChatCompletion | AsyncIterable<ChatCompletionChunk>> {
    if (params.stream) {
      return this.stream<ChatCompletionChunk>(
        "/chat/completions",
        { ...params, stream: true },
        "chat",
      );
    }
    return this.call(() =>
      this.chatApi.chatCompletionsV1ChatCompletionsPost({
        chatCompletionRequest: ChatCompletionRequestFromJSON(params),
      }),
    );
  }

  // -- Responses API --------------------------------------------------------

  /**
   * Create a response via the OpenAI-style Responses API.
   *
   * When `stream: true`, returns an `AsyncIterable` of raw parsed response-stream
   * event objects (the responses event stream has no single typed chunk model);
   * otherwise the parsed response object.
   */
  async response(
    params: { model: string; input: unknown; stream?: boolean } & Record<string, unknown>,
  ): Promise<unknown> {
    if (params.stream) {
      return this.stream<unknown>("/responses", { ...params, stream: true }, "responses");
    }
    return this.call(() =>
      this.responsesApi.createResponseV1ResponsesPost({
        responsesRequest: ResponsesRequestFromJSON(params),
      }),
    );
  }

  // -- Messages API (Anthropic-shaped /messages) ----------------------------

  /**
   * Create an Anthropic-style message via the gateway `/messages` endpoint.
   *
   * This endpoint has no OpenAI-SDK seam and was previously missing from the
   * SDK. When `stream: true`, returns an `AsyncIterable` of raw parsed
   * message-stream event objects; otherwise a typed `MessageResponse`.
   */
  async message(
    params: {
      model: string;
      messages: unknown[];
      max_tokens: number;
      stream?: boolean;
    } & Record<string, unknown>,
  ): Promise<MessageResponse | AsyncIterable<unknown>> {
    if (params.stream) {
      return this.stream<unknown>("/messages", { ...params, stream: true }, "messages");
    }
    return this.call(() =>
      this.messagesApi.createMessageV1MessagesPost({
        messagesRequest: MessagesRequestFromJSON(params),
      }),
    );
  }

  /**
   * Count input tokens for an Anthropic-style message request via the gateway
   * `/v1/messages/count_tokens` endpoint.
   *
   * Counts the tokens a `/messages` request would consume without generating a
   * response, so `max_tokens` is not accepted. Returns a typed
   * `CountTokensResponse`.
   */
  async countTokens(
    params: {
      model: string;
      messages: unknown[];
    } & Record<string, unknown>,
  ): Promise<CountTokensResponse> {
    return this.call(() =>
      this.messagesApi.countMessageTokensV1MessagesCountTokensPost({
        countTokensRequest: CountTokensRequestFromJSON(params),
      }),
    );
  }

  // -- Embeddings -----------------------------------------------------------

  /** Create embeddings for the given input. */
  async embedding(
    params: { model: string; input: string | string[] } & Record<string, unknown>,
  ): Promise<CreateEmbeddingResponse> {
    return this.call(() =>
      this.embeddingsApi.createEmbeddingV1EmbeddingsPost({
        embeddingRequest: EmbeddingRequestFromJSON(params),
      }),
    );
  }

  // -- Moderation -----------------------------------------------------------

  /** Run a content moderation check via the gateway. */
  async moderation(params: ModerationCreateParams): Promise<ModerationCreateResponse>;

  /**
   * Run a content moderation check with the provider's raw response body
   * preserved under each result's `provider_raw` field.
   */
  async moderation(
    params: ModerationCreateParams & { includeRaw: true },
  ): Promise<ModerationResponseExt>;

  async moderation(
    params: ModerationCreateParams & { includeRaw?: boolean },
  ): Promise<ModerationCreateResponse | ModerationResponseExt> {
    const { includeRaw, ...rest } = params;
    const result = (await this.call(() =>
      this.moderationsApi.createModerationV1ModerationsPost({
        moderationRequest: ModerationRequestFromJSON(rest),
        includeRaw: includeRaw || undefined,
      }),
    )) as ModerationResponse;
    return result as ModerationCreateResponse | ModerationResponseExt;
  }

  // -- Rerank ---------------------------------------------------------------

  /** Rerank `documents` by relevance to `query`. */
  async rerank(params: RerankParams): Promise<RerankResponse> {
    return this.call(() =>
      this.rerankApi.createRerankV1RerankPost({
        rerankRequest: RerankRequestFromJSON(params),
      }),
    );
  }

  // -- Images ---------------------------------------------------------------

  /**
   * Generate images from a text prompt.
   *
   * Returns the gateway's OpenAI-compatible image payload as-is
   * (`{ created, data: [...] }`). The generated core models this response as an
   * opaque object, so the parsed JSON is returned unchanged.
   */
  async imageGeneration(params: ImageGenerationParams): Promise<Record<string, unknown>> {
    return this.call(() =>
      this.imagesApi.createImageV1ImagesGenerationsPost({
        imageGenerationRequest: ImageGenerationRequestFromJSON(params),
      }),
    ) as Promise<Record<string, unknown>>;
  }

  // -- Audio ----------------------------------------------------------------

  /**
   * Synthesize speech (text-to-speech), returning the raw audio bytes.
   *
   * The gateway returns binary audio (`audio/mpeg` by default) with no JSON
   * response model, so the generated JSON core cannot handle it. This posts a
   * raw JSON `fetch` over the same transport as the streaming shim and returns
   * the response body as a `Uint8Array`. A failed response is routed through the
   * same error mapper as every other method.
   */
  async speech(params: SpeechParams): Promise<Uint8Array> {
    const response = await this.post("/audio/speech", { json: { ...params } });
    return new Uint8Array(await response.arrayBuffer());
  }

  /**
   * Transcribe audio to text.
   *
   * `file` is the raw audio bytes (or a `Blob`) uploaded as multipart form data
   * under the `file` field, with `model` and any other parameters as form
   * fields. The generated core types its `file` param as a string and so cannot
   * carry binary, so this posts multipart over the raw transport. Returns the
   * parsed JSON for JSON response formats, or the raw text for `text` / `srt` /
   * `vtt` formats.
   */
  async transcription(params: TranscriptionParams): Promise<unknown> {
    const { model, file, filename = "audio", ...rest } = params;
    const form = new FormData();
    const blob = file instanceof Blob ? file : new Blob([file as BlobPart]);
    form.append("file", blob, filename);
    form.append("model", model);
    for (const [key, value] of Object.entries(rest)) {
      if (value !== undefined && value !== null) {
        form.append(key, String(value));
      }
    }
    const response = await this.post("/audio/transcriptions", { form });
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      return response.json();
    }
    return response.text();
  }

  // -- Models ---------------------------------------------------------------

  /** List available models from the gateway. */
  async listModels(): Promise<ModelObject[]> {
    const result = await this.call(() => this.modelsApi.listModelsV1ModelsGet());
    return [...result.data];
  }

  // -- Batch operations -----------------------------------------------------

  /** Create a batch job. */
  async createBatch(params: CreateBatchParams): Promise<BatchWithProvider> {
    return this.call(() =>
      this.batchesApi.createBatchV1BatchesPost({
        createBatchRequest: CreateBatchRequestFromJSON(params),
      }),
    ) as Promise<BatchWithProvider>;
  }

  /** Retrieve the status of a batch job. */
  async retrieveBatch(batchId: string, provider: string): Promise<unknown> {
    return this.call(() => this.batchesApi.retrieveBatchV1BatchesBatchIdGet({ batchId, provider }));
  }

  /** Cancel a batch job. */
  async cancelBatch(batchId: string, provider: string): Promise<unknown> {
    return this.call(() =>
      this.batchesApi.cancelBatchV1BatchesBatchIdCancelPost({ batchId, provider }),
    );
  }

  /** List batch jobs for a provider. */
  async listBatches(provider: string, options?: ListBatchesOptions): Promise<unknown[]> {
    const result = (await this.call(() =>
      this.batchesApi.listBatchesV1BatchesGet({
        provider,
        after: options?.after,
        limit: options?.limit,
      }),
    )) as { data?: unknown[] };
    return Array.isArray(result?.data) ? result.data : [];
  }

  /**
   * Retrieve the results of a completed batch job.
   *
   * @throws {BatchNotCompleteError} If the batch is not yet complete (HTTP 409).
   */
  async retrieveBatchResults(batchId: string, provider: string): Promise<BatchResult> {
    const data = (await this.call(() =>
      this.batchesApi.retrieveBatchResultsV1BatchesBatchIdResultsGet({ batchId, provider }),
    )) as { results?: Array<{ custom_id: string; result?: unknown; error?: unknown }> };
    const results = Array.isArray(data?.results) ? data.results : [];
    return {
      results: results.map((entry) => ({
        custom_id: entry.custom_id,
        result: entry.result as BatchResult["results"][number]["result"],
        error: entry.error as BatchResult["results"][number]["error"],
      })),
    };
  }

  // -- Internal helpers -----------------------------------------------------

  /**
   * Run a generated-core call, mapping its `ResponseError` to a typed otari
   * error. Non-`ResponseError` failures (network, etc.) propagate unchanged.
   */
  private async call<T>(fn: () => Promise<T>): Promise<T> {
    try {
      return await fn();
    } catch (error) {
      throw await mapError(error);
    }
  }

  /**
   * Open a raw streaming POST and return an `AsyncIterable` of parsed SSE
   * chunks. The generated core buffers responses, so streaming is hand-written
   * here: a raw streaming `fetch` parsed by `./streaming`. A failed response is
   * routed through the same error mapper as the non-streaming path.
   */
  private async stream<Item>(
    path: string,
    body: Record<string, unknown>,
    kind: StreamKind,
  ): Promise<Stream<Item>> {
    const url = `${this.baseURL}${path}`;
    const controller = new AbortController();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "text/event-stream",
      ...this.defaultHeaders,
    };

    const response = await this.fetchApi(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw await mapResponse(response);
    }

    return Stream.fromSSEResponse<Item>(response, controller, kind);
  }

  /**
   * Issue a non-streaming raw `fetch` POST (JSON body or multipart form),
   * mapping a failed response through the same typed-error mapper as every other
   * method.
   *
   * The audio endpoints (binary speech out, multipart transcription in) do not
   * fit the generated JSON core, so they post directly over the shared `fetch`
   * here and reuse `mapResponse`. Both auth modes work because `defaultHeaders`
   * carries the per-mode auth header. For multipart, the `Content-Type` is left
   * to `fetch`/`FormData` so the boundary is set correctly.
   */
  private async post(
    path: string,
    body: { json: Record<string, unknown> } | { form: FormData },
  ): Promise<Response> {
    const url = `${this.baseURL}${path}`;
    const headers: Record<string, string> = { ...this.defaultHeaders };
    let payload: BodyInit;
    if ("json" in body) {
      headers["Content-Type"] = "application/json";
      payload = JSON.stringify(body.json);
    } else {
      payload = body.form;
    }

    const response = await this.fetchApi(url, {
      method: "POST",
      headers,
      body: payload,
    });

    if (!response.ok) {
      throw await mapResponse(response);
    }
    return response;
  }
}
