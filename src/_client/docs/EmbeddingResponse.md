
# EmbeddingResponse

An OpenAI-compatible embeddings response, with the gateway\'s inline cost on ``usage``.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;EmbeddingData&gt;](EmbeddingData.md)
`model` | string
`object` | string
`usage` | [EmbeddingUsage](EmbeddingUsage.md)

## Example

```typescript
import type { EmbeddingResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "model": null,
  "object": null,
  "usage": null,
} satisfies EmbeddingResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddingResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


