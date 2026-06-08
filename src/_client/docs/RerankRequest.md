
# RerankRequest

Rerank request.

## Properties

Name | Type
------------ | -------------
`documents` | Array&lt;string&gt;
`maxTokensPerDoc` | number
`model` | string
`query` | string
`topN` | number
`user` | string

## Example

```typescript
import type { RerankRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "documents": null,
  "maxTokensPerDoc": null,
  "model": null,
  "query": null,
  "topN": null,
  "user": null,
} satisfies RerankRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RerankRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


