
# AgentRecommenderCreate

Add a subagent router. The first one added is switched on; a later one waits to be.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`inputPricePerMillion` | number
`model` | string
`outputPricePerMillion` | number
`provider` | string

## Example

```typescript
import type { AgentRecommenderCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "inputPricePerMillion": null,
  "model": null,
  "outputPricePerMillion": null,
  "provider": null,
} satisfies AgentRecommenderCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentRecommenderCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


