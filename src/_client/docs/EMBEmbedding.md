
# EMBEmbedding

Represents an embedding vector returned by embedding endpoint.

## Properties

Name | Type
------------ | -------------
`embedding` | Array&lt;number&gt;
`index` | number
`object` | string

## Example

```typescript
import type { EMBEmbedding } from ''

// TODO: Update the object below with actual values
const example = {
  "embedding": null,
  "index": null,
  "object": null,
} satisfies EMBEmbedding

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EMBEmbedding
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


