
# SetPricingRequest

Create a versioned per-model price, with optional cache and context tiers.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWritePricePerMillion` | number
`effectiveAt` | Date
`inputPricePerMillion` | number
`kind` | string
`modelKey` | string
`outputPricePerMillion` | number
`pricePerRequest` | number
`pricingTiers` | [Array&lt;PricingTier&gt;](PricingTier.md)
`unit` | string

## Example

```typescript
import type { SetPricingRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "effectiveAt": null,
  "inputPricePerMillion": null,
  "kind": null,
  "modelKey": null,
  "outputPricePerMillion": null,
  "pricePerRequest": null,
  "pricingTiers": null,
  "unit": null,
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


