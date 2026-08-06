
# SetPricingRequest

Create a versioned per-model price, with optional cache and context tiers.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWrite1hPricePerMillion` | number
`cacheWritePricePerMillion` | number
`effectiveAt` | Date
`inputPricePerMillion` | number
`modelKey` | string
`outputPricePerMillion` | number
`pricingTiers` | [Array&lt;PricingTier&gt;](PricingTier.md)

## Example

```typescript
import type { SetPricingRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWrite1hPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "effectiveAt": null,
  "inputPricePerMillion": null,
  "modelKey": null,
  "outputPricePerMillion": null,
  "pricingTiers": null,
} satisfies SetPricingRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetPricingRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


