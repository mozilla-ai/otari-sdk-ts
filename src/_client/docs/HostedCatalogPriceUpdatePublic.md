
# HostedCatalogPriceUpdatePublic

The models.dev price changes a catalog update would apply.  ``changes`` is a sample and the counts are the totals. ``digest`` names the fetched prices, so applying them applies what was reviewed. ``needs_review`` is why the scheduled update would hold them for a person under ``auto``.

## Properties

Name | Type
------------ | -------------
`addedCount` | number
`changedCount` | number
`changes` | [Array&lt;HostedCatalogPriceChangePublic&gt;](HostedCatalogPriceChangePublic.md)
`changesTruncated` | boolean
`digest` | string
`fetchedAt` | Date
`needsReview` | boolean
`removedCount` | number
`reviewReason` | string

## Example

```typescript
import type { HostedCatalogPriceUpdatePublic } from ''

// TODO: Update the object below with actual values
const example = {
  "addedCount": null,
  "changedCount": null,
  "changes": null,
  "changesTruncated": null,
  "digest": null,
  "fetchedAt": null,
  "needsReview": null,
  "removedCount": null,
  "reviewReason": null,
} satisfies HostedCatalogPriceUpdatePublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedCatalogPriceUpdatePublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


