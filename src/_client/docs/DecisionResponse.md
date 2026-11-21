
# DecisionResponse

The provider\'s answers, keyed like the request\'s questions.

## Properties

Name | Type
------------ | -------------
`answers` | [{ [key: string]: DecisionAnswer; }](DecisionAnswer.md)
`model` | string
`usage` | [DecisionUsage](DecisionUsage.md)

## Example

```typescript
import type { DecisionResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "answers": null,
  "model": null,
  "usage": null,
} satisfies DecisionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DecisionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


