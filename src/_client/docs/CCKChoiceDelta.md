
# CCKChoiceDelta


## Properties

Name | Type
------------ | -------------
`content` | string
`functionCall` | [CCKChoiceDeltaFunctionCall](CCKChoiceDeltaFunctionCall.md)
`refusal` | string
`role` | string
`toolCalls` | [Array&lt;CCKChoiceDeltaToolCall&gt;](CCKChoiceDeltaToolCall.md)
`reasoning` | [CCKReasoning](CCKReasoning.md)

## Example

```typescript
import type { CCKChoiceDelta } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "functionCall": null,
  "refusal": null,
  "role": null,
  "toolCalls": null,
  "reasoning": null,
} satisfies CCKChoiceDelta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCKChoiceDelta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


