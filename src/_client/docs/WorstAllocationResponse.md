
# WorstAllocationResponse

The row furthest through its allowance.

## Properties

Name | Type
------------ | -------------
`allocated` | number
`budgetId` | string
`name` | string
`scopeId` | string
`scopeType` | string
`spent` | number

## Example

```typescript
import type { WorstAllocationResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "allocated": null,
  "budgetId": null,
  "name": null,
  "scopeId": null,
  "scopeType": null,
  "spent": null,
} satisfies WorstAllocationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorstAllocationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


