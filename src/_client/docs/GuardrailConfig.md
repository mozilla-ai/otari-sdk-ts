
# GuardrailConfig

A single guardrail check the caller wants the gateway to enforce.  URL safety: when ``url`` is supplied it is validated at parse time with the same SSRF guard used for MCP server URLs (loopback allowed by default for same-host sidecars; gated by ``OTARI_MCP_ALLOW_LOOPBACK`` / ``OTARI_MCP_ALLOW_PRIVATE_HOSTS``). Most deployments omit ``url`` and rely on the operator-set ``OTARI_GUARDRAILS_URL`` instead.

## Properties

Name | Type
------------ | -------------
`mode` | string
`on` | Array&lt;string&gt;
`profile` | string
`url` | string
`validateKwargs` | { [key: string]: any; }

## Example

```typescript
import type { GuardrailConfig } from ''

// TODO: Update the object below with actual values
const example = {
  "mode": null,
  "on": null,
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


