
# PricingRefreshPreviewResponse

Reviewable summary of a pending models.dev refresh.

## Properties

Name | Type
------------ | -------------
`addedCount` | number
`changedCount` | number
`changes` | [Array&lt;PricingRefreshChangeResponse&gt;](PricingRefreshChangeResponse.md)
`changesTruncated` | boolean
`digest` | string
`fetchedAt` | Date
`needsReview` | boolean
`protectedModelCount` | number
`removedCount` | number
`reviewReason` | string

## Example

```typescript
import type { PricingRefreshPreviewResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "addedCount": null,
  "changedCount": null,
  "changes": null,
  "changesTruncated": null,
  "digest": null,
  "fetchedAt": null,
  "needsReview": null,
  "protectedModelCount": null,
  "removedCount": null,
  "reviewReason": null,
} satisfies PricingRefreshPreviewResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PricingRefreshPreviewResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


