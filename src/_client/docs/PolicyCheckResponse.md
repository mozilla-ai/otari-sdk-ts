
# PolicyCheckResponse


## Properties

Name | Type
------------ | -------------
`blocked` | boolean
`policyId` | string
`provenance` | string
`results` | [Array&lt;GateResultResponse&gt;](GateResultResponse.md)
`schemaVersion` | string

## Example

```typescript
import type { PolicyCheckResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "blocked": null,
  "policyId": null,
  "provenance": null,
  "results": null,
  "schemaVersion": null,
} satisfies PolicyCheckResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PolicyCheckResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


