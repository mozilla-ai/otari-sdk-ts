
# CatalogResponse

The grouped catalog, and the facts a reader needs to interpret its prices.

## Properties

Name | Type
------------ | -------------
`count` | number
`defaultPricing` | boolean
`defaultsAsOf` | Date
`metadataAvailable` | boolean
`models` | [Array&lt;CatalogModelSummary&gt;](CatalogModelSummary.md)

## Example

```typescript
import type { CatalogResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "defaultPricing": null,
  "defaultsAsOf": null,
  "metadataAvailable": null,
  "models": null,
} satisfies CatalogResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


