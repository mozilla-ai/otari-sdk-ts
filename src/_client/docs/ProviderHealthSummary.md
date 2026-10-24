
# ProviderHealthSummary

One provider\'s offerings in the latest finished run.  ``down`` when none answered, ``degraded`` when some did not, ``ok`` when all did.

## Properties

Name | Type
------------ | -------------
`answered` | number
`history` | [Array&lt;ProviderHistoryPoint&gt;](ProviderHistoryPoint.md)
`provider` | string
`status` | string
`topError` | string
`topErrorCount` | number
`total` | number

## Example

```typescript
import type { ProviderHealthSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "answered": null,
  "history": null,
  "provider": null,
  "status": null,
  "topError": null,
  "topErrorCount": null,
  "total": null,
} satisfies ProviderHealthSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProviderHealthSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


