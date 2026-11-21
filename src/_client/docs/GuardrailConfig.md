
# GuardrailConfig

A single guardrail check the caller wants the gateway to enforce.  URL safety: when ``url`` is supplied it is validated by :func:`gateway.services.guardrails.check_guardrail_urls` (not here at parse time, since the check does a DNS lookup that must be awaited) with the same SSRF guard used for MCP server URLs: public addresses only, connected at the address that was checked, with no redirect followed. Most deployments omit ``url`` and rely on the operator-set ``OTARI_GUARDRAILS_URL`` instead, which may be on a private address.

## Properties

Name | Type
------------ | -------------
`credential` | string
`mode` | string
`on` | Array&lt;string&gt;
`onUnavailable` | string
`profile` | string
`url` | string
`validateKwargs` | { [key: string]: any; }

## Example

```typescript
import type { GuardrailConfig } from ''

// TODO: Update the object below with actual values
const example = {
  "credential": null,
  "mode": null,
  "on": null,
  "onUnavailable": null,
  "profile": null,
  "url": null,
  "validateKwargs": null,
} satisfies GuardrailConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuardrailConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


