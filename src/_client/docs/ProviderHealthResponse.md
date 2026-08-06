
# ProviderHealthResponse

Provider connectivity across the whole gateway, for the health monitor.  Carries per-provider results plus the ``healthy`` / ``total`` counts and the most recent ``checked_at`` so the overview page can render a summary tile without re-deriving them.

## Properties

Name | Type
------------ | -------------
`checkedAt` | string
`degraded` | number
`healthy` | number
`providers` | [Array&lt;ProviderHealthSchema&gt;](ProviderHealthSchema.md)
`total` | number

## Example

```typescript
import type { ProviderHealthResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "checkedAt": null,
  "degraded": null,
  "healthy": null,
  "providers": null,
  "total": null,
} satisfies ProviderHealthResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProviderHealthResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


