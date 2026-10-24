
# OrganizationModelPricingCreate

Create one rate override for a model, or a search or fetch instance, for a period.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWritePricePerMillion` | number
`effectiveFrom` | Date
`effectiveTo` | Date
`inputPricePerMillion` | number
`kind` | string
`modelKey` | string
`outputPricePerMillion` | number
`pricingTiers` | [Array&lt;PricingTier&gt;](PricingTier.md)
`unit` | string

## Example

```typescript
import type { OrganizationModelPricingCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "effectiveFrom": null,
  "effectiveTo": null,
  "inputPricePerMillion": null,
  "kind": null,
  "modelKey": null,
  "outputPricePerMillion": null,
  "pricingTiers": null,
  "unit": null,
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


