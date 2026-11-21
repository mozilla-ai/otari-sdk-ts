
# AgentModelRecommendation

The model recommended for the subagent.

## Properties

Name | Type
------------ | -------------
`model` | string
`probabilities` | { [key: string]: number; }
`reason` | string

## Example

```typescript
import type { AgentModelRecommendation } from ''

// TODO: Update the object below with actual values
const example = {
  "model": null,
  "probabilities": null,
  "reason": null,
} satisfies AgentModelRecommendation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentModelRecommendation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


