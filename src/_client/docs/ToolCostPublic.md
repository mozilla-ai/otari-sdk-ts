
# ToolCostPublic

An estimate of what one tool call cost, from the model requests either side of it.

## Properties

Name | Type
------------ | -------------
`calling` | number
`callsSharingRequest` | number
`callsSharingResult` | number
`laterRequests` | number
`rereading` | number
`resultTokens` | number
`spanId` | string
`subagent` | number
`total` | number
`writing` | number

## Example

```typescript
import type { ToolCostPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "calling": null,
  "callsSharingRequest": null,
  "callsSharingResult": null,
  "laterRequests": null,
  "rereading": null,
  "resultTokens": null,
  "spanId": null,
  "subagent": null,
  "total": null,
  "writing": null,
} satisfies ToolCostPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ToolCostPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


