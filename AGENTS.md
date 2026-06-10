# AGENTS.md

Guidance for agentic coding tools working in this repository.
Scope: entire repo.

`CLAUDE.md` is a symlink to this file. Always edit `AGENTS.md` directly; never modify `CLAUDE.md`.

## Project Snapshot
- Project: `@mozilla-ai/otari` (npm), the **TypeScript client SDK** for the otari gateway /
  platform. `OtariClient` talks to a running gateway over HTTP.
- Runtime: Node.js 24+ (`package.json` `engines`). ESM-only (`"type": "module"`; imports use
  explicit `.js` extensions).
- Tooling: TypeScript (strict), Vitest, Biome (lint + format).
- Source root: `src/`. Tests: `tests/unit/`.

## Architecture (Big Picture)
This SDK is a **thin, hand-written shell over an OpenAPI-generated typed core**. It is **not**
a wrapper around the `openai` npm package (it has no runtime `openai` dependency). Read these
together before changing request behavior.

- **Generated core** (`src/_client/`): produced by OpenAPI Generator (typescript-fetch) from
  the gateway's OpenAPI spec. It is **generated, not hand-edited.** Regeneration happens upstream
  in the gateway repo (`.github/workflows/gateway-sdk-codegen.yml`), which opens a
  `sdk-codegen/client-core` PR here. The core is **excluded from Biome** (`biome.json`:
  `"!src/_client"`) but is still **type-checked** under the strict `tsconfig`, generated-model
  changes can break `tsc`, so a core regen must pass `npm run typecheck`.
- **Hand-written shell** (rest of `src/`):
  - `client.ts`: `OtariClient` with `completion`, `response`, `message`, `embedding`,
    `moderation`, `rerank`, `listModels`, batch operations, and a `controlPlane` accessor.
  - `streaming.ts`: SSE shim (a faithful port of the openai SDK's `LineDecoder` / `SSEDecoder`).
    The generated core cannot stream; this returns `AsyncIterable<ChatCompletionChunk>` for chat
    and raw JSON for responses/messages, with abort-on-break and `[DONE]` handling.
  - `mapError.ts`: maps HTTP status + detail strings to the typed error hierarchy; handles both
    the generated `ResponseError` and a raw `fetch` `Response`.
  - `errors.ts`: `OtariError` base + typed subclasses.
  - `controlPlane.ts`: typed wrapper over management APIs (`keys`/`users`/`budgets`/`pricing`/`usage`).
  - `types.ts`: re-exports of generated types + hand-written option/param interfaces.
  - `index.ts`: public surface: `OtariClient`, `ControlPlane`, errors, types, and `Stream`.

### Single transport seam
All HTTP (inference, streaming, control plane) flows through one injectable `fetch`
implementation, which is what unit tests mock, no real network in `tests/unit`.

### Two auth modes (must both keep working)
- **Platform** (`platformToken` / `OTARI_AI_TOKEN`): `Authorization: Bearer`, base URL defaults
  to the hosted gateway.
- **Self-hosted** (`apiBase` + `apiKey`, env `GATEWAY_API_BASE` / `GATEWAY_API_KEY`): `Otari-Key`
  header. `adminKey` (env `GATEWAY_ADMIN_KEY`) is used for `controlPlane`.
Typed error mapping applies in both modes.

### Endpoint-coverage drift gate
`tests/unit/endpointCoverage.test.ts` fetches the canonical gateway spec
(`https://raw.githubusercontent.com/mozilla-ai/otari/main/docs/public/openapi.json`) and asserts
every endpoint is accounted for in `sdk-endpoints.txt` (`[covered]` / `[excluded]`). Update that
manifest when you add or intentionally skip an endpoint.

## Setup / Build / Test Commands
- Install: `npm ci`
- Build: `npm run build` (`tsc`)
- Test (all): `npm run test`, unit only: `npm run test:unit`
- Single test: `npx vitest run tests/unit/client.test.ts`
- Drift gate (needs network): `npx vitest run tests/unit/endpointCoverage.test.ts`
- Typecheck: `npm run typecheck` (`tsc --noEmit`)
- Lint: `npm run lint` (Biome), format: `npm run format`
- Combined gate: `npm run check` (Biome + `tsc --noEmit`)

## Repository Conventions
- ESM only: import local modules with the `.js` extension (`import { x } from "./file.js"`).
- `tsconfig` is `strict`; the generated `src/_client` is type-checked too, so keep generated and
  hand-written code type-clean. Biome: 2-space indent, 100-col width; `src/_client` is excluded.
- Errors are always thrown as typed `OtariError` subclasses, callers branch on `instanceof`,
  not on string codes.
- Streaming returns `AsyncIterable<T>`; iterate with `for await`.
- Unit tests mock the `fetch` passed to the `OtariClient` constructor; no live HTTP.

## Change Validation Checklist
- Touched request handling, auth, or errors → `npm run test:unit` and confirm both auth modes
  still map errors correctly.
- Touched streaming → run streaming tests; chat yields `ChatCompletionChunk`, responses/messages
  yield raw JSON.
- Added/removed an endpoint wrapper → update `sdk-endpoints.txt` and run the drift gate.
- Always run `npm run check` before opening a PR. A generated-core PR must pass `npm run typecheck`.

## Writing style

- Avoid em dashes and double hyphens (`--`) used as separators in prose
  (README, docs, doc comments, commit messages, PR descriptions). Use commas,
  semicolons, colons, parentheses, or periods, or rephrase. This does not apply
  to code (for example CLI flags like `--all`) or en-dash numeric ranges like `3–4`.

## Notes for Agents
- Never hand-edit `src/_client/`; it is regenerated from the gateway spec.
- The SDK does **not** depend on `openai`; don't reintroduce it. Streaming intentionally mirrors
  the openai SDK's decoder rather than importing it.
- Prefer minimal, targeted edits; match existing module/import style in touched files.
