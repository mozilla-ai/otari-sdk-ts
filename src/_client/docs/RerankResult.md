
# RerankResult

One document\'s relevance to the query.

## Properties

Name | Type
------------ | -------------
`index` | number
`relevanceScore` | number

## Example

```typescript
import type { RerankResult } from ''

// TODO: Update the object below with actual values
const example = {
  "index": null,
  "relevanceScore": null,
} satisfies RerankResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RerankResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


