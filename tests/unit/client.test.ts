/**
 * Tests for the OtariClient (generated-core shell).
 *
 * Mirrors the Python reference's test rewrite: everything is mocked at the
 * single transport seam — the `fetch` implementation passed to the client (and
 * shared by the generated core, the SSE streaming shim, and the control-plane).
 * We assert method/URL/headers per auth mode, request-body shaping, typed
 * response parsing, the status -> typed-error table, and the SSE shim against
 * mocked `text/event-stream` bytes.
 *
 * Note: there is no LLM provider key in this sandbox, so a real streamed chat
 * cannot be exercised end-to-end. Chat-streaming coverage is mocked bytes only.
 */

import { afterEach, describe, expect, it } from "vitest";
import { OtariClient } from "../../src/client.js";
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
} from "../../src/errors.js";

// ---------------------------------------------------------------------------
// Transport mock: a fake `fetch` that records the last request and serves a
// canned JSON or SSE response.
// ---------------------------------------------------------------------------

interface RecordedRequest {
  method: string;
  url: string;
  headers: Record<string, string>;
  body: unknown;
}

interface FetchMock {
  fetch: typeof fetch;
  last: RecordedRequest;
  calls: RecordedRequest[];
}

function headersToObject(init?: HeadersInit): Record<string, string> {
  const out: Record<string, string> = {};
  if (!init) return out;
  new Headers(init).forEach((value, key) => {
    out[key] = value;
  });
  return out;
}

/** Build a mock fetch returning a JSON body with the given status/headers. */
function jsonFetch(status: number, body: unknown, headers: Record<string, string> = {}): FetchMock {
  const mock: FetchMock = {
    last: { method: "", url: "", headers: {}, body: undefined },
    calls: [],
    fetch: (async (url: string, init?: RequestInit) => {
      const rec: RecordedRequest = {
        method: init?.method ?? "GET",
        url: String(url),
        headers: headersToObject(init?.headers),
        body: init?.body ? JSON.parse(init.body as string) : undefined,
      };
      mock.last = rec;
      mock.calls.push(rec);
      return new Response(body == null ? null : JSON.stringify(body), {
        status,
        headers: { "content-type": "application/json", ...headers },
      });
    }) as unknown as typeof fetch,
  };
  return mock;
}

/** Build a `text/event-stream` body from JSON event strings + the DONE sentinel. */
function sseBody(...events: string[]): string {
  return `${events.map((e) => `data: ${e}\n\n`).join("")}data: [DONE]\n\n`;
}

/** Build a mock fetch returning a streamed SSE body. */
function sseFetch(status: number, body: string): FetchMock {
  const mock: FetchMock = {
    last: { method: "", url: "", headers: {}, body: undefined },
    calls: [],
    fetch: (async (url: string, init?: RequestInit) => {
      const rec: RecordedRequest = {
        method: init?.method ?? "GET",
        url: String(url),
        headers: headersToObject(init?.headers),
        body: init?.body ? JSON.parse(init.body as string) : undefined,
      };
      mock.last = rec;
      mock.calls.push(rec);
      return new Response(body, {
        status,
        headers: { "content-type": "text/event-stream" },
      });
    }) as unknown as typeof fetch,
  };
  return mock;
}

// ---------------------------------------------------------------------------
// Response fixtures (validated against the generated models)
// ---------------------------------------------------------------------------

const CHAT_RESPONSE = {
  id: "chatcmpl-1",
  object: "chat.completion",
  created: 1,
  model: "openai:gpt-4o-mini",
  choices: [{ index: 0, finish_reason: "stop", message: { role: "assistant", content: "Hi" } }],
};

const EMBEDDING_RESPONSE = {
  object: "list",
  model: "openai:text-embedding-3-small",
  data: [{ object: "embedding", index: 0, embedding: [0.1, 0.2] }],
  usage: { prompt_tokens: 1, total_tokens: 1 },
};

const RERANK_RESPONSE = { id: "rerank-1", results: [{ index: 0, relevance_score: 0.9 }] };

const MESSAGE_RESPONSE = {
  id: "msg-1",
  type: "message",
  role: "assistant",
  model: "anthropic:claude-3-5-sonnet",
  content: [{ type: "text", text: "Hi" }],
  usage: { input_tokens: 1, output_tokens: 1 },
};

const COUNT_TOKENS_RESPONSE = { input_tokens: 42 };

const MODERATION_RESPONSE = {
  id: "modr-1",
  model: "openai:omni-moderation-latest",
  results: [{ flagged: false, categories: {}, category_scores: {} }],
};

const MODELS_RESPONSE = {
  object: "list",
  data: [{ id: "openai:gpt-4o", object: "model", created: 1, owned_by: "openai" }],
};

// ---------------------------------------------------------------------------
// Constructor / auth-mode wiring
// ---------------------------------------------------------------------------

describe("OtariClient constructor", () => {
  const envBackup = { ...process.env };
  afterEach(() => {
    process.env = { ...envBackup };
  });

  it("throws when apiBase is missing and no env/platform token is set", () => {
    delete process.env.GATEWAY_API_BASE;
    delete process.env.OTARI_AI_TOKEN;
    delete process.env.GATEWAY_PLATFORM_TOKEN;
    expect(() => new OtariClient()).toThrow("api_base is required");
  });

  it("uses apiBase from options", () => {
    const client = new OtariClient({ apiBase: "http://localhost:8000" });
    expect((client as unknown as { baseURL: string }).baseURL).toBe("http://localhost:8000/v1");
    expect((client as unknown as { gatewayRoot: string }).gatewayRoot).toBe(
      "http://localhost:8000",
    );
  });

  it("does not double-append /v1", () => {
    const client = new OtariClient({ apiBase: "http://localhost:8000/v1" });
    expect((client as unknown as { baseURL: string }).baseURL).toBe("http://localhost:8000/v1");
  });

  it("strips trailing slash", () => {
    const client = new OtariClient({ apiBase: "http://localhost:8000/" });
    expect((client as unknown as { baseURL: string }).baseURL).toBe("http://localhost:8000/v1");
  });

  it("falls back to GATEWAY_API_BASE env var", () => {
    process.env.GATEWAY_API_BASE = "http://env-gateway:9000";
    const client = new OtariClient();
    expect((client as unknown as { baseURL: string }).baseURL).toBe("http://env-gateway:9000/v1");
  });

  it("defaults to https://api.otari.ai in platform mode", () => {
    delete process.env.GATEWAY_API_BASE;
    delete process.env.OTARI_AI_TOKEN;
    delete process.env.GATEWAY_PLATFORM_TOKEN;
    const client = new OtariClient({ platformToken: "tk_x" });
    expect((client as unknown as { baseURL: string }).baseURL).toBe("https://api.otari.ai/v1");
  });
});

describe("OtariClient auth modes", () => {
  const envBackup = { ...process.env };
  afterEach(() => {
    process.env = { ...envBackup };
  });

  it("platform mode sets Bearer Authorization header", () => {
    const client = new OtariClient({ apiBase: "http://localhost:8000", platformToken: "tk_test" });
    const headers = (client as unknown as { defaultHeaders: Record<string, string> })
      .defaultHeaders;
    expect(client.platformMode).toBe(true);
    expect(headers.Authorization).toBe("Bearer tk_test");
    expect(headers["Otari-Key"]).toBeUndefined();
  });

  it("platform mode activates via OTARI_AI_TOKEN env", () => {
    process.env.OTARI_AI_TOKEN = "tk_env";
    const client = new OtariClient({ apiBase: "http://localhost:8000" });
    const headers = (client as unknown as { defaultHeaders: Record<string, string> })
      .defaultHeaders;
    expect(client.platformMode).toBe(true);
    expect(headers.Authorization).toBe("Bearer tk_env");
  });

  it("non-platform mode sets Otari-Key header", () => {
    const client = new OtariClient({ apiBase: "http://localhost:8000", apiKey: "vk_123" });
    const headers = (client as unknown as { defaultHeaders: Record<string, string> })
      .defaultHeaders;
    expect(client.platformMode).toBe(false);
    expect(headers["Otari-Key"]).toBe("Bearer vk_123");
    expect(headers.Authorization).toBeUndefined();
  });

  it("apiKey option overrides platform token env", () => {
    process.env.GATEWAY_PLATFORM_TOKEN = "tk_env";
    const client = new OtariClient({ apiBase: "http://localhost:8000", apiKey: "vk_123" });
    expect(client.platformMode).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Request shaping + typed response parsing
// ---------------------------------------------------------------------------

describe("OtariClient.completion", () => {
  it("returns a typed ChatCompletion and shapes the request", async () => {
    const mock = jsonFetch(200, CHAT_RESPONSE);
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    const result = await client.completion({
      model: "openai:gpt-4o-mini",
      messages: [{ role: "user", content: "Hi" }],
      temperature: 0.5,
    });
    expect(result.choices?.[0]?.message?.content).toBe("Hi");
    expect(mock.last.method).toBe("POST");
    expect(mock.last.url).toMatch(/\/v1\/chat\/completions$/);
    expect((mock.last.body as Record<string, unknown>).model).toBe("openai:gpt-4o-mini");
    expect((mock.last.body as Record<string, unknown>).temperature).toBe(0.5);
    expect(mock.last.headers["otari-key"]).toBe("Bearer vk");
  });

  it("sends Bearer Authorization in platform mode", async () => {
    const mock = jsonFetch(200, CHAT_RESPONSE);
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      platformToken: "tk",
      fetch: mock.fetch,
    });
    await client.completion({ model: "m", messages: [{ role: "user", content: "Hi" }] });
    expect(mock.last.headers.authorization).toBe("Bearer tk");
  });
});

describe("OtariClient.embedding", () => {
  it("returns a typed embedding", async () => {
    const mock = jsonFetch(200, EMBEDDING_RESPONSE);
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    const result = await client.embedding({
      model: "openai:text-embedding-3-small",
      input: "hello",
    });
    expect(result.data?.[0]?.embedding).toEqual([0.1, 0.2]);
    expect(mock.last.url).toMatch(/\/v1\/embeddings$/);
    expect((mock.last.body as Record<string, unknown>).input).toBe("hello");
  });
});

describe("OtariClient.rerank", () => {
  it("returns a typed rerank response", async () => {
    const mock = jsonFetch(200, RERANK_RESPONSE);
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    const result = await client.rerank({ model: "m", query: "q", documents: ["a", "b"] });
    expect(result.results?.[0]?.relevanceScore).toBe(0.9);
    expect(mock.last.url).toMatch(/\/v1\/rerank$/);
    expect((mock.last.body as Record<string, unknown>).documents).toEqual(["a", "b"]);
  });
});

describe("OtariClient.message", () => {
  it("returns a typed MessageResponse from /messages", async () => {
    const mock = jsonFetch(200, MESSAGE_RESPONSE);
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    const result = (await client.message({
      model: "anthropic:claude-3-5-sonnet",
      messages: [{ role: "user", content: "Hi" }],
      max_tokens: 64,
    })) as { id: string };
    expect(result.id).toBe("msg-1");
    expect(mock.last.url).toMatch(/\/v1\/messages$/);
    expect((mock.last.body as Record<string, unknown>).max_tokens).toBe(64);
    expect((mock.last.body as Record<string, unknown>).model).toBe("anthropic:claude-3-5-sonnet");
  });
});

describe("OtariClient.countTokens", () => {
  it("returns a typed CountTokensResponse from /messages/count_tokens", async () => {
    const mock = jsonFetch(200, COUNT_TOKENS_RESPONSE);
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    const result = await client.countTokens({
      model: "anthropic:claude-3-5-sonnet",
      messages: [{ role: "user", content: "Hi" }],
    });
    expect(result.inputTokens).toBe(42);
    expect(mock.last.url).toMatch(/\/v1\/messages\/count_tokens$/);
    expect((mock.last.body as Record<string, unknown>).model).toBe("anthropic:claude-3-5-sonnet");
    expect((mock.last.body as Record<string, unknown>).max_tokens).toBeUndefined();
  });
});

describe("OtariClient.moderation", () => {
  it("returns a typed moderation response", async () => {
    const mock = jsonFetch(200, MODERATION_RESPONSE);
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    const result = await client.moderation({ model: "m", input: "text" });
    expect(result.results[0].flagged).toBe(false);
    expect(mock.last.url).toMatch(/\/v1\/moderations$/);
  });
});

describe("OtariClient.listModels", () => {
  it("returns typed model objects", async () => {
    const mock = jsonFetch(200, MODELS_RESPONSE);
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    const models = await client.listModels();
    expect(models[0].id).toBe("openai:gpt-4o");
    expect(mock.last.url).toMatch(/\/v1\/models$/);
  });
});

// ---------------------------------------------------------------------------
// Error mapping (generated ResponseError -> typed otari errors), both modes
// ---------------------------------------------------------------------------

describe("OtariClient error mapping", () => {
  it.each([
    [401, AuthenticationError],
    [403, AuthenticationError],
    [402, InsufficientFundsError],
    [404, ModelNotFoundError],
    [429, RateLimitError],
    [502, UpstreamProviderError],
    [503, UpstreamProviderError],
    [504, GatewayTimeoutError],
    [418, OtariError],
  ])("maps status %i to the typed error", async (status, ErrorClass) => {
    const mock = jsonFetch(status, { detail: "boom" });
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    await expect(
      client.completion({ model: "m", messages: [{ role: "user", content: "Hi" }] }),
    ).rejects.toMatchObject({ constructor: ErrorClass, statusCode: status });
  });

  it("maps the same table in platform mode too", async () => {
    const mock = jsonFetch(402, { detail: "no funds" });
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      platformToken: "tk",
      fetch: mock.fetch,
    });
    await expect(
      client.completion({ model: "m", messages: [{ role: "user", content: "Hi" }] }),
    ).rejects.toBeInstanceOf(InsufficientFundsError);
  });

  it("carries retry-after on 429", async () => {
    const mock = jsonFetch(429, { detail: "slow down" }, { "retry-after": "30" });
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    await expect(
      client.completion({ model: "m", messages: [{ role: "user", content: "Hi" }] }),
    ).rejects.toMatchObject({ retryAfter: "30" });
  });

  it("includes correlation_id in the message", async () => {
    const mock = jsonFetch(402, { detail: "no funds" }, { "x-correlation-id": "abc-123" });
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    await expect(
      client.completion({ model: "m", messages: [{ role: "user", content: "Hi" }] }),
    ).rejects.toThrow(/abc-123/);
  });

  it("maps unsupported-moderation 400 in any mode", async () => {
    const mock = jsonFetch(400, { detail: "Provider anthropic does not support moderation" });
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    await expect(
      client.moderation({ model: "anthropic:claude", input: "text" }),
    ).rejects.toMatchObject({
      constructor: UnsupportedCapabilityError,
      provider: "anthropic",
      capability: "moderation",
    });
  });

  it("maps 409 to BatchNotCompleteError with batchId/status", async () => {
    const mock = jsonFetch(409, {
      detail: "Batch 'batch_abc' is not yet complete (status: in_progress)",
    });
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    try {
      await client.retrieveBatchResults("batch_abc", "openai");
      expect.unreachable("should have thrown");
    } catch (err) {
      expect(err).toBeInstanceOf(BatchNotCompleteError);
      expect((err as BatchNotCompleteError).batchId).toBe("batch_abc");
      expect((err as BatchNotCompleteError).batchStatus).toBe("in_progress");
    }
  });
});

// ---------------------------------------------------------------------------
// SSE streaming shim (chat = must-have; mocked bytes only)
// ---------------------------------------------------------------------------

describe("OtariClient chat streaming", () => {
  const chunk1 =
    '{"id":"c","object":"chat.completion.chunk","created":1,"model":"m",' +
    '"choices":[{"index":0,"delta":{"role":"assistant","content":"He"}}]}';
  const chunk2 =
    '{"id":"c","object":"chat.completion.chunk","created":1,"model":"m",' +
    '"choices":[{"index":0,"delta":{"content":"llo"}}]}';

  it("yields typed chunks and stops on [DONE]", async () => {
    const mock = sseFetch(200, sseBody(chunk1, chunk2));
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    const stream = await client.completion({
      model: "m",
      messages: [{ role: "user", content: "Hi" }],
      stream: true,
    });

    const contents: (string | null | undefined)[] = [];
    for await (const c of stream) {
      contents.push(c.choices?.[0]?.delta?.content);
    }
    expect(contents).toEqual(["He", "llo"]);
    expect(mock.last.headers.accept).toBe("text/event-stream");
    expect(mock.last.headers["otari-key"]).toBe("Bearer vk");
    expect((mock.last.body as Record<string, unknown>).stream).toBe(true);
  });

  it("sends Bearer Authorization when streaming in platform mode", async () => {
    const mock = sseFetch(200, sseBody(chunk1));
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      platformToken: "tk",
      fetch: mock.fetch,
    });
    const stream = await client.completion({
      model: "m",
      messages: [{ role: "user", content: "Hi" }],
      stream: true,
    });
    for await (const _ of stream) {
      // drain
    }
    expect(mock.last.headers.authorization).toBe("Bearer tk");
  });

  it("maps a failed streaming response to a typed error", async () => {
    const mock = jsonFetch(429, { detail: "rate limited" });
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "vk",
      fetch: mock.fetch,
    });
    await expect(
      client.completion({ model: "m", messages: [{ role: "user", content: "Hi" }], stream: true }),
    ).rejects.toBeInstanceOf(RateLimitError);
  });
});

// ---------------------------------------------------------------------------
// Batch operations
// ---------------------------------------------------------------------------

describe("OtariClient batch methods", () => {
  const batchResponse = {
    id: "batch_abc123",
    object: "batch",
    status: "validating",
    provider: "openai",
  };

  it("createBatch posts to /v1/batches and returns provider", async () => {
    const mock = jsonFetch(200, batchResponse);
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "k",
      fetch: mock.fetch,
    });
    const result = await client.createBatch({
      model: "openai:gpt-4o-mini",
      requests: [{ custom_id: "r1", body: {} }],
    });
    expect(mock.last.url).toMatch(/\/v1\/batches$/);
    expect(mock.last.method).toBe("POST");
    expect(result.provider).toBe("openai");
  });

  it("retrieveBatch sends the provider query param", async () => {
    const mock = jsonFetch(200, batchResponse);
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "k",
      fetch: mock.fetch,
    });
    await client.retrieveBatch("batch_abc123", "openai");
    expect(mock.last.url).toContain("/v1/batches/batch_abc123");
    expect(mock.last.url).toContain("provider=openai");
    expect(mock.last.method).toBe("GET");
  });

  it("listBatches returns the data array", async () => {
    const mock = jsonFetch(200, { data: [batchResponse, { ...batchResponse, id: "batch_def" }] });
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "k",
      fetch: mock.fetch,
    });
    const result = (await client.listBatches("openai", { after: "cur", limit: 10 })) as Array<{
      id: string;
    }>;
    expect(result).toHaveLength(2);
    expect(mock.last.url).toContain("after=cur");
    expect(mock.last.url).toContain("limit=10");
  });

  it("retrieveBatchResults maps per-request items", async () => {
    const mock = jsonFetch(200, {
      results: [
        { custom_id: "r1", result: { id: "chatcmpl-1" }, error: null },
        { custom_id: "r2", result: null, error: { code: "rate_limit", message: "..." } },
      ],
    });
    const client = new OtariClient({
      apiBase: "http://localhost:8000",
      apiKey: "k",
      fetch: mock.fetch,
    });
    const result = await client.retrieveBatchResults("batch_abc123", "openai");
    expect(result.results).toHaveLength(2);
    expect(result.results[0].custom_id).toBe("r1");
    expect(result.results[1].error?.code).toBe("rate_limit");
  });
});

// ---------------------------------------------------------------------------
// Control-plane accessor
// ---------------------------------------------------------------------------

describe("OtariClient.controlPlane", () => {
  const envBackup = { ...process.env };
  afterEach(() => {
    process.env = { ...envBackup };
  });

  it("requires an admin credential", () => {
    delete process.env.OTARI_AI_TOKEN;
    delete process.env.GATEWAY_PLATFORM_TOKEN;
    delete process.env.GATEWAY_ADMIN_KEY;
    const client = new OtariClient({ apiBase: "http://localhost:8000", apiKey: "vk" });
    expect(() => client.controlPlane).toThrow(/admin credential/);
  });

  it("is available with an admin key and exposes the API accessors", () => {
    const client = new OtariClient({ apiBase: "http://localhost:8000", adminKey: "master" });
    const cp = client.controlPlane;
    expect(cp.keys).toBeDefined();
    expect(cp.users).toBeDefined();
    expect(cp.budgets).toBeDefined();
    expect(cp.pricing).toBeDefined();
    expect(cp.usage).toBeDefined();
  });
});
