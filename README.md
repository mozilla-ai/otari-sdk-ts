<p align="center">
  <img src="assets/otari-logo.svg" width="320" alt="otari logo"/>
</p>

<div align="center">

# Otari TypeScript Client SDK

![Node.js 24+](https://img.shields.io/badge/node-24%2B-blue.svg)
[![npm](https://img.shields.io/npm/v/@mozilla-ai/otari)](https://www.npmjs.com/package/@mozilla-ai/otari)
<a href="https://discord.gg/4gf3zXrQUc">
    <img src="https://img.shields.io/static/v1?label=Chat%20on&message=Discord&color=blue&logo=Discord&style=flat-square" alt="Discord">
</a>

**TypeScript client for [otari](https://github.com/mozilla-ai/otari), the open-source core that powers [otari.ai](https://otari.ai).**
Talk to any LLM provider through otari using a single, typed interface.

[Hosted Platform (Beta)](https://otari.ai/)

</div>

> New to otari? The [otari repo](https://github.com/mozilla-ai/otari) explains what it is and why you’d use it.

## Quickstart

Install:

```bash
npm install @mozilla-ai/otari
```

Generate an API token at [otari.ai/organization-settings/api-tokens](https://otari.ai/organization-settings/api-tokens), then add a provider key (e.g. OpenAI) at [otari.ai/organization-settings/provider-keys](https://otari.ai/organization-settings/provider-keys) so the gateway can route requests to that provider. Then use the client:

```typescript
import { OtariClient } from "@mozilla-ai/otari";

const client = new OtariClient({
  platformToken: "tk_your_api_token",
});

const response = await client.completion({
  model: "openai:gpt-4o-mini",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(response.choices[0].message.content);
```

That's it, the client defaults to the hosted gateway at `https://api.otari.ai`. Change the `model` string to switch providers.

## Installation

### Requirements

Node.js 24+.

### Install

```bash
npm install @mozilla-ai/otari
```

### Setting up credentials

The client reads credentials from constructor options or environment variables.

- **Platform (hosted otari.ai):** set `OTARI_AI_TOKEN` to your API token. The base URL defaults to `https://api.otari.ai`.
- **Self-hosted gateway:** set `GATEWAY_API_BASE` to your gateway URL and `GATEWAY_API_KEY` to your gateway API key.

Prefer to keep secrets out of code? Create a `.env` (copy [`.env.example`](./.env.example)) and run with `node --env-file=.env your-script.js`. Node 20.6+ loads it natively, with no extra dependency:

```ini
OTARI_AI_TOKEN=tk_your_api_token
```

Then `new OtariClient()` picks up the token from the environment.

## Authentication

The client supports two modes.

**Platform mode (hosted):** pass `platformToken` (or set `OTARI_AI_TOKEN`). The token is sent as `Authorization: Bearer <token>`, and the base URL defaults to the hosted gateway at `https://api.otari.ai`:

```typescript
const client = new OtariClient({
  platformToken: "tk_your_api_token",
});
```

**Self-hosted mode:** run the gateway yourself (see the [otari repo](https://github.com/mozilla-ai/otari)), then point the SDK at it with `apiBase` and `apiKey`. The API key is sent via the custom `Otari-Key: Bearer <key>` header:

```typescript
const client = new OtariClient({
  apiBase: "http://localhost:8000", // or wherever you host the gateway
  apiKey: "your-gateway-api-key",
});
```

These map to the `GATEWAY_API_BASE` and `GATEWAY_API_KEY` environment variables. Make sure your gateway has provider keys configured (e.g. OpenAI) so it can route requests upstream; see the [otari repo](https://github.com/mozilla-ai/otari) for setup.

## Usage

### Chat completions

```typescript
const response = await client.completion({
  model: "openai:gpt-4o-mini",
  messages: [{ role: "user", content: "Hello!" }],
});
console.log(response.choices[0].message.content);
```

### Streaming

Pass `stream: true` to get an `AsyncIterable` of chunks, and iterate with `for await`:

```typescript
const stream = await client.completion({
  model: "openai:gpt-4o-mini",
  messages: [{ role: "user", content: "Tell me a story." }],
  stream: true,
});

for await (const chunk of stream) {
  const content = chunk.choices[0]?.delta?.content;
  if (content) process.stdout.write(content);
}
```

### Responses API

```typescript
const response = await client.response({
  model: "openai:gpt-4o-mini",
  input: "Summarize this in one sentence.",
});
console.log(response.output_text);
```

### Messages API

The Anthropic-shaped `/messages` endpoint requires `max_tokens` and returns content blocks:

```typescript
const message = await client.message({
  model: "anthropic:claude-3-5-sonnet",
  messages: [{ role: "user", content: "Hello!" }],
  max_tokens: 1024,
});
console.log(message.content);
```

### Embeddings

```typescript
const result = await client.embedding({
  model: "openai:text-embedding-3-small",
  input: "Hello world",
});
console.log(result.data[0].embedding);
```

### Listing models

```typescript
const models = await client.listModels();
for (const model of models) {
  console.log(model.id);
}
```

### Moderation

```typescript
import { OtariClient, UnsupportedCapabilityError } from "@mozilla-ai/otari";

try {
  const result = await client.moderation({
    model: "openai:omni-moderation-latest",
    input: "I want to hurt someone",
  });
  if (result.results[0].flagged) {
    throw new Error("unsafe input");
  }
} catch (err) {
  if (err instanceof UnsupportedCapabilityError) {
    // The selected provider doesn't offer moderation (e.g. Anthropic).
    console.error(`${err.provider} does not support ${err.capability}`);
  } else {
    throw err;
  }
}
```

Pass `includeRaw: true` to preserve the upstream provider's raw body under `provider_raw`:

```typescript
const result = await client.moderation({
  model: "openai:omni-moderation-latest",
  input: "...",
  includeRaw: true,
});
console.log(result.results[0].provider_raw);
```

### Reranking

Rerank documents by relevance to a query. Results carry the original `index` and a `relevanceScore`:

```typescript
const result = await client.rerank({
  model: "cohere:rerank-v3.5",
  query: "What is the capital of France?",
  documents: ["Paris is the capital of France.", "Berlin is in Germany."],
  top_n: 2,
});
for (const item of result.results ?? []) {
  console.log(item.index, item.relevanceScore);
}
```

### Batch operations

Submit many requests as a single batch, poll for status, then fetch results:

```typescript
const batch = await client.createBatch({
  model: "openai:gpt-4o-mini",
  requests: [
    {
      custom_id: "r1",
      body: { messages: [{ role: "user", content: "Hello!" }] },
    },
  ],
});

// The provider is returned on the batch and required for follow-up calls.
const status = await client.retrieveBatch(batch.id, batch.provider);

// List batches for a provider (optional pagination).
const batches = await client.listBatches(batch.provider, { limit: 10 });

// Once complete, fetch the per-request results.
const { results } = await client.retrieveBatchResults(batch.id, batch.provider);
for (const entry of results) {
  console.log(entry.custom_id, entry.result ?? entry.error);
}

// Or cancel an in-flight batch.
await client.cancelBatch(batch.id, batch.provider);
```

`retrieveBatchResults` throws `BatchNotCompleteError` (HTTP 409) if the batch is not yet complete.

### Error handling

In platform mode, HTTP errors are mapped to typed exceptions:

```typescript
import { OtariClient, AuthenticationError, RateLimitError } from "@mozilla-ai/otari";

try {
  await client.completion({
    model: "openai:gpt-4o-mini",
    messages: [{ role: "user", content: "Hello!" }],
  });
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error("Invalid credentials:", error.message);
  } else if (error instanceof RateLimitError) {
    console.error("Rate limited, retry after:", error.retryAfter);
  }
}
```

| HTTP Status | Error Class | Description |
|------------|-------------|-------------|
| 400 (capability) | `UnsupportedCapabilityError` | Selected provider does not support the requested capability (e.g. moderation) |
| 401, 403 | `AuthenticationError` | Invalid or missing credentials |
| 402 | `InsufficientFundsError` | Budget or credits exhausted |
| 404 | `ModelNotFoundError` | Model not found, or no provider key configured for the requested provider, add one at [otari.ai/organization-settings/provider-keys](https://otari.ai/organization-settings/provider-keys). The exception's `message` contains the gateway's detail. |
| 409 | `BatchNotCompleteError` | Batch results requested before the batch completed |
| 429 | `RateLimitError` | Rate limit exceeded (includes `retryAfter`) |
| 502 | `UpstreamProviderError` | Upstream provider unreachable |
| 504 | `GatewayTimeoutError` | Gateway timed out waiting for provider |

`UnsupportedCapabilityError` surfaces in both modes; the rest are platform-mode only.

## Development

Requires Node.js 24+.

```bash
npm install        # install deps
npm run test:unit  # unit tests
npm test           # all tests
npm run typecheck  # type-check
npm run build      # build to dist/
```

## Documentation

Full documentation lives at [mozilla-ai.github.io/otari](https://mozilla-ai.github.io/otari/).

otari also ships client SDKs in other languages, all targeting the same gateway:

- [Python](https://github.com/mozilla-ai/otari-sdk-python)
- [Go](https://github.com/mozilla-ai/otari-sdk-go)
- [Rust](https://github.com/mozilla-ai/otari-sdk-rust)

## Contributing

Contributions welcome, please open an issue or PR. See the
[contributing guide on the main otari repo](https://github.com/mozilla-ai/otari/blob/main/CONTRIBUTING.md).

## License

Apache License 2.0, see [LICENSE](./LICENSE).
