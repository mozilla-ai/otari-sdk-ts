
# GatewaySettings

Operator-facing runtime settings surfaced to the dashboard.  The top-level flags are kept for the callers that read them directly (pricing warnings, the models/providers pages); ``config`` is the full read-only view with the settable/startup-only marking.

## Properties

Name | Type
------------ | -------------
`config` | [Array&lt;ConfigField&gt;](ConfigField.md)
`defaultPricing` | boolean
`masterKeySource` | string
`mode` | string
`modelDiscovery` | boolean
`requirePricing` | boolean
`secretKeyConfigured` | boolean
`version` | string

## Example

```typescript
import type { GatewaySettings } from ''

// TODO: Update the object below with actual values
const example = {
  "config": null,
  "defaultPricing": null,
  "masterKeySource": null,
  "mode": null,
  "modelDiscovery": null,
  "requirePricing": null,
  "secretKeyConfigured": null,
  "version": null,
} satisfies GatewaySettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GatewaySettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


