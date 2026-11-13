
# DecisionRequest

A decisions request: typed questions to answer about one state.

## Properties

Name | Type
------------ | -------------
`images` | Array&lt;string&gt;
`model` | string
`questions` | [{ [key: string]: QuestionsValue; }](QuestionsValue.md)
`state` | [State](State.md)
`user` | string

## Example

```typescript
import type { DecisionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "images": null,
  "model": null,
  "questions": null,
  "state": null,
  "user": null,
} satisfies DecisionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DecisionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


