/**
 * @mozilla-ai/otari - TypeScript SDK for the otari gateway.
 *
 * Option C: a thin shell over a core generated from the otari OpenAPI spec
 * (`./_client`), not a wrapper around the official `openai` package.
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
 * ```
 */

export { OtariClient } from "./client.js";
export { ControlPlane } from "./controlPlane.js";
export type { OtariErrorOptions } from "./errors.js";
export {
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
export { Stream } from "./streaming.js";

export type {
  BatchRequestItem,
  BatchResult,
  BatchResultError,
  BatchResultItem,
  BatchWithProvider,
  ChatCompletion,
  ChatCompletionChunk,
  ChatCompletionRequest,
  CreateBatchParams,
  CreateEmbeddingResponse,
  EmbeddingRequest,
  ListBatchesOptions,
  MessageResponse,
  MessagesRequest,
  ModelListResponse,
  ModelObject,
  ModerationCreateParams,
  ModerationCreateResponse,
  ModerationRequest,
  ModerationResponse,
  ModerationResponseExt,
  ModerationResult,
  ModerationResultExt,
  OtariClientOptions,
  RerankParams,
  RerankRequest,
  RerankResponse,
  RerankResult,
  ResponsesRequest,
} from "./types.js";
