
# OrganizationModelPricingCreate

Create one rate override for a model, for a period.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWrite1hPricePerMillion` | number
`cacheWritePricePerMillion` | number
`effectiveFrom` | Date
`effectiveTo` | Date
`inputPricePerMillion` | number
`modelKey` | string
`outputPricePerMillion` | number
`pricingTiers` | [Array&lt;PricingTier&gt;](PricingTier.md)

## Example

```typescript
import type { OrganizationModelPricingCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWrite1hPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "effectiveFrom": null,
  "effectiveTo": null,
  "inputPricePerMillion": null,
  "modelKey": null,
  "outputPricePerMillion": null,
  "pricingTiers": null,
} satisfies OrganizationModelPricingCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationModelPricingCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


