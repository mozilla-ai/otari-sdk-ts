
# ProviderCapabilitiesSchema

Curated capability flags for a provider.

## Properties

Name | Type
------------ | -------------
`audio` | boolean
`embeddings` | boolean
`imageGeneration` | boolean
`listModels` | boolean
`moderation` | boolean
`pdf` | boolean
`reasoning` | boolean
`rerank` | boolean
`responsesApi` | boolean
`streaming` | boolean
`vision` | boolean

## Example

```typescript
import type { ProviderCapabilitiesSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "audio": null,
  "embeddings": null,
  "imageGeneration": null,
  "listModels": null,
  "moderation": null,
  "pdf": null,
  "reasoning": null,
  "rerank": null,
  "responsesApi": null,
  "streaming": null,
  "vision": null,
} satisfies ProviderCapabilitiesSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProviderCapabilitiesSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


