
# AgentRecommenderPublic

One stored subagent router, known by its provider, model and the tail of its key.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKeyLast4` | string
`createdAt` | Date
`enabled` | boolean
`hasApiKey` | boolean
`id` | string
`inputPricePerMillion` | number
`model` | string
`outputPricePerMillion` | number
`provider` | string
`updatedAt` | Date

## Example

```typescript
import type { AgentRecommenderPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKeyLast4": null,
  "createdAt": null,
  "enabled": null,
  "hasApiKey": null,
  "id": null,
  "inputPricePerMillion": null,
  "model": null,
  "outputPricePerMillion": null,
  "provider": null,
  "updatedAt": null,
} satisfies AgentRecommenderPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentRecommenderPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


