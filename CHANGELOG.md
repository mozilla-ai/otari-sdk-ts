# Changelog

## [0.4.0](https://github.com/mozilla-ai/otari-sdk-ts/compare/otari-v0.3.1...otari-v0.4.0) (2026-06-16)


### Features

* add image generation and audio (speech/transcription) methods ([#25](https://github.com/mozilla-ai/otari-sdk-ts/issues/25)) ([14b0374](https://github.com/mozilla-ai/otari-sdk-ts/commit/14b03741b1f8dcfcac812cc1c60ccd9f918e3fbe))

## [0.3.1](https://github.com/mozilla-ai/otari-sdk-ts/compare/otari-v0.3.0...otari-v0.3.1) (2026-06-12)


### Features

* add batch API support to GatewayClient ([3772a60](https://github.com/mozilla-ai/otari-sdk-ts/commit/3772a60ffb876e1d404539abb77a9d56a18ed9e0))
* add batch API support to GatewayClient ([9fdfea0](https://github.com/mozilla-ai/otari-sdk-ts/commit/9fdfea047009ca532987d9165cce253c39a0772f))
* independent release automation + surface gateway spec version ([#21](https://github.com/mozilla-ai/otari-sdk-ts/issues/21)) ([19d093e](https://github.com/mozilla-ai/otari-sdk-ts/commit/19d093effa406ede1d6a02555bfd1aead259f0ab))
* initial TypeScript SDK for any-llm gateway ([796fd10](https://github.com/mozilla-ai/otari-sdk-ts/commit/796fd10ff8025d8a03003267d325ee56346ac457))
* wrap /v1/messages/count_tokens (regenerate core + ergonomic method) ([#18](https://github.com/mozilla-ai/otari-sdk-ts/issues/18)) ([9189b3f](https://github.com/mozilla-ai/otari-sdk-ts/commit/9189b3f1fc6df9b5ca10cf22590373ffa23c7fe7))


### Bug Fixes

* add BatchWithProvider type to expose gateway-injected provider field ([31aedbe](https://github.com/mozilla-ai/otari-sdk-ts/commit/31aedbe78dfcb9fe093f21465539dab743d3b088))
* add repository URL to package.json for npm provenance ([a1b7b8d](https://github.com/mozilla-ai/otari-sdk-ts/commit/a1b7b8d951af5b9fb3a96084c38d791aef311f79))
* checkout release tag ref for npm provenance signing ([50504f9](https://github.com/mozilla-ai/otari-sdk-ts/commit/50504f9001e14850b446c149cbf7a43215261822))
* drop Node 18 from CI matrix (vitest 4.x requires Node 20+) ([0f671ff](https://github.com/mozilla-ai/otari-sdk-ts/commit/0f671ff759c6bf7a864b441127d7a112c6d4a8ed))
* regenerate lockfile to sync with package.json for npm ci ([eaeec33](https://github.com/mozilla-ai/otari-sdk-ts/commit/eaeec33692ed61881bd6b6365dea86167e274c5b))
* regenerate package-lock.json for npm ci compatibility ([88586f0](https://github.com/mozilla-ai/otari-sdk-ts/commit/88586f05629535b9465f44a5a98eacd92f058ad1))
* regenerate SDK client core so message.reasoning is a string ([#23](https://github.com/mozilla-ai/otari-sdk-ts/issues/23)) ([3216ccb](https://github.com/mozilla-ai/otari-sdk-ts/commit/3216ccbee12d1f92c3faf7c574c53ed8bb89e7d4))
* update batch test to use renamed AnyLLM-Key header ([f1a7d8c](https://github.com/mozilla-ai/otari-sdk-ts/commit/f1a7d8c7645bd1bfbd0a3b0d66102d255c7a37a3))
* update moderation raw-fetch tests to use renamed AnyLLM-Key header ([5c5b58e](https://github.com/mozilla-ai/otari-sdk-ts/commit/5c5b58e066b859a4dab8ceb7b33e05afcd2932ab))
