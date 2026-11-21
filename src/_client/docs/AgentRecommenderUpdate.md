
# AgentRecommenderUpdate

Change a subagent router. An omitted field keeps its stored value.  Omitting ``api_key`` keeps the stored key while the provider and the API base stay the same, so a price change never has to re-send a secret. A new provider or address needs its own key, unless it is a self-hosted server that takes none. A blank ``api_base`` goes back to the provider\'s own address. Switching one on switches every other one off.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`enabled` | boolean
`inputPricePerMillion` | number
`model` | string
`outputPricePerMillion` | number
`provider` | string

## Example

```typescript
import type { AgentRecommenderUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "enabled": null,
  "inputPricePerMillion": null,
  "model": null,
  "outputPricePerMillion": null,
  "provider": null,
} satisfies AgentRecommenderUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentRecommenderUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


