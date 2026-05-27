<div align="center">

# otari (TypeScript)

![Node.js 24+](https://img.shields.io/badge/node-24%2B-blue.svg)
[![npm](https://img.shields.io/npm/v/@mozilla-ai/otari)](https://www.npmjs.com/package/@mozilla-ai/otari)
<a href="https://discord.gg/4gf3zXrQUc">
    <img src="https://img.shields.io/static/v1?label=Chat%20on&message=Discord&color=blue&logo=Discord&style=flat-square" alt="Discord">
</a>

**TypeScript client for [otari-gateway](https://github.com/mozilla-ai/otari).**
Talk to any LLM provider through the gateway using a single, typed interface.

[Python SDK](https://github.com/mozilla-ai/otari) · [Hosted Platform (Beta)](https://otari.ai/)

</div>

## Quickstart

Install:

```bash
npm install @mozilla-ai/otari
```

Grab a project token from [otari.ai](https://otari.ai/) and use the client:

```typescript
import { OtariClient } from "@mozilla-ai/otari";

const client = new OtariClient({
  platformToken: "tk_your_project_token",
});

const response = await client.completion({
  model: "openai:gpt-4o-mini",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(response.choices[0].message.content);
```

That's it — the client defaults to the hosted gateway at `https://api.otari.ai`. Change the `model` string to switch providers.

Prefer to keep secrets out of code? Create a `.env` (copy [`.env.example`](./.env.example)) and run with `node --env-file=.env your-script.js` — Node 20.6+ loads it natively, no extra dependency:

```ini
OTARI_AI_TOKEN=tk_your_project_token
```

Then `new OtariClient()` picks up the token from the environment.

## Self-hosting the gateway

Prefer to run the gateway yourself instead of using the hosted otari.ai? Follow the setup in the [otari gateway repo](https://github.com/mozilla-ai/otari), then point the SDK at it:

```typescript
const client = new OtariClient({
  apiBase: "http://localhost:8000", // or wherever you host the gateway
  apiKey: "your-gateway-api-key",
});
```

The SDK sends `apiKey` via the custom `Otari-Key: Bearer …` header. Env: `GATEWAY_API_BASE` + `GATEWAY_API_KEY`.

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

### Embeddings

```typescript
const result = await client.embedding({
  model: "openai:text-embedding-3-small",
  input: "Hello world",
});
console.log(result.data[0].embedding);
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

### Listing models

```typescript
const models = await client.listModels();
for (const model of models) {
  console.log(model.id);
}
```

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
| 404 | `ModelNotFoundError` | Model not found or unavailable |
| 429 | `RateLimitError` | Rate limit exceeded (includes `retryAfter`) |
| 502 | `UpstreamProviderError` | Upstream provider unreachable |
| 504 | `GatewayTimeoutError` | Gateway timed out waiting for provider |

`UnsupportedCapabilityError` surfaces in both modes; the rest are platform-mode only.

## Why otari?

- **Single unified interface** — switch providers by changing the model string
- **Fully typed** — built on the official OpenAI Node SDK, so IDE support is excellent
- **Framework-agnostic** — works in any Node.js project
- **Battle-tested** — powers our own production tools (e.g. [any-agent](https://github.com/mozilla-ai/any-agent))

## Development

Requires Node.js 24+.

```bash
npm install        # install deps
npm run test:unit  # unit tests
npm test           # all tests
npm run typecheck  # type-check
npm run build      # build to dist/
```

## Contributing

Contributions welcome — please open an issue or PR. See the
[contributing guide on the main otari repo](https://github.com/mozilla-ai/otari/blob/main/CONTRIBUTING.md).

## License

Apache License 2.0 — see [LICENSE](./LICENSE).
