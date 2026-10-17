
# RerankUsage

What a rerank request was metered at, and what it cost.

## Properties

Name | Type
------------ | -------------
`costUsd` | string
`pricingSource` | string
`searchUnits` | number
`totalTokens` | number

## Example

```typescript
import type { RerankUsage } from ''

// TODO: Update the object below with actual values
const example = {
  "costUsd": null,
  "pricingSource": null,
  "searchUnits": null,
  "totalTokens": null,
} satisfies RerankUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RerankUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


