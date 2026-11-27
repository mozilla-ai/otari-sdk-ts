
# EmbeddingData

One input\'s embedding, in OpenAI\'s shape.

## Properties

Name | Type
------------ | -------------
`embedding` | [Embedding](Embedding.md)
`index` | number
`object` | string

## Example

```typescript
import type { EmbeddingData } from ''

// TODO: Update the object below with actual values
const example = {
  "embedding": null,
  "index": null,
  "object": null,
} satisfies EmbeddingData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddingData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


