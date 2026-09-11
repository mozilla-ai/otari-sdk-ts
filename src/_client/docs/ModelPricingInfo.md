
# ModelPricingInfo

Pricing information for a model.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWrite1hPricePerMillion` | number
`cacheWritePricePerMillion` | number
`inputPricePerMillion` | number
`outputPricePerMillion` | number
`pricingTiers` | [Array&lt;PricingTiersInner&gt;](PricingTiersInner.md)

## Example

```typescript
import type { ModelPricingInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWrite1hPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "inputPricePerMillion": null,
  "outputPricePerMillion": null,
  "pricingTiers": null,
} satisfies ModelPricingInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelPricingInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


