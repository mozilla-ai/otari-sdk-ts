
# OrganizationModelPricingPublic

One stored rate override.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWrite1hPricePerMillion` | number
`cacheWritePricePerMillion` | number
`createdAt` | Date
`effectiveFrom` | Date
`effectiveTo` | Date
`id` | string
`inputPricePerMillion` | number
`modelKey` | string
`organizationId` | string
`outputPricePerMillion` | number
`pricingTiers` | [Array&lt;PricingTier&gt;](PricingTier.md)
`updatedAt` | Date

## Example

```typescript
import type { OrganizationModelPricingPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWrite1hPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "createdAt": null,
  "effectiveFrom": null,
  "effectiveTo": null,
  "id": null,
  "inputPricePerMillion": null,
  "modelKey": null,
  "organizationId": null,
  "outputPricePerMillion": null,
  "pricingTiers": null,
  "updatedAt": null,
} satisfies OrganizationModelPricingPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationModelPricingPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


