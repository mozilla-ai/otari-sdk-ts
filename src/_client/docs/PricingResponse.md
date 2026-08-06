
# PricingResponse

Response model for model pricing.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWrite1hPricePerMillion` | number
`cacheWritePricePerMillion` | number
`createdAt` | string
`effectiveAt` | string
`inputPricePerMillion` | number
`modelKey` | string
`outputPricePerMillion` | number
`pricingTiers` | [Array&lt;PricingTier&gt;](PricingTier.md)
`updatedAt` | string

## Example

```typescript
import type { PricingResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWrite1hPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "createdAt": null,
  "effectiveAt": null,
  "inputPricePerMillion": null,
  "modelKey": null,
  "outputPricePerMillion": null,
  "pricingTiers": null,
  "updatedAt": null,
} satisfies PricingResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PricingResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


