
# AllocationHealthResponse

One set of capped rows, reduced to what a strip renders.

## Properties

Name | Type
------------ | -------------
`cappedCount` | number
`nearCount` | number
`overCount` | number
`totalCount` | number
`worst` | [WorstAllocationResponse](WorstAllocationResponse.md)

## Example

```typescript
import type { AllocationHealthResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "cappedCount": null,
  "nearCount": null,
  "overCount": null,
  "totalCount": null,
  "worst": null,
} satisfies AllocationHealthResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllocationHealthResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


