
# JudgeVerdictRequest

One judge gate\'s verdict, as the caller\'s own model call produced it.

## Properties

Name | Type
------------ | -------------
`gateId` | string
`outcome` | string
`reasoning` | string

## Example

```typescript
import type { JudgeVerdictRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "gateId": null,
  "outcome": null,
  "reasoning": null,
} satisfies JudgeVerdictRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JudgeVerdictRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


