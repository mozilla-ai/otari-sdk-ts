
# RerankResponse

Normalized rerank response, provider-agnostic.

## Properties

Name | Type
------------ | -------------
`id` | string
`results` | [Array&lt;RRRerankResult&gt;](RRRerankResult.md)
`meta` | [RRRerankMeta](RRRerankMeta.md)
`usage` | [RRRerankUsage](RRRerankUsage.md)

## Example

```typescript
import type { RerankResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "results": null,
  "meta": null,
  "usage": null,
} satisfies RerankResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RerankResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


