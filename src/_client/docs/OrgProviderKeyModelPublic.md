
# OrgProviderKeyModelPublic

One offered model, with the rate the caller\'s organization is charged for it.  ``price_source`` says which rung of ``services.pricing_service`` answered: ``organization`` for a rate an admin set, ``defaults`` for the community-maintained rate this surface seeded or the genai-prices fallback, ``deployment`` for the deployment\'s own price list, and None when nothing prices the model yet. ``pricing_id`` names the organization\'s own row where there is one, so a client can edit that rate without re-deriving the key.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWrite1hPricePerMillion` | number
`cacheWritePricePerMillion` | number
`createdAt` | Date
`enabled` | boolean
`id` | string
`inputPricePerMillion` | number
`model` | string
`orgProviderKeyId` | string
`outputPricePerMillion` | number
`priceSource` | string
`pricingId` | string
`updatedAt` | Date

## Example

```typescript
import type { OrgProviderKeyModelPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWrite1hPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "createdAt": null,
  "enabled": null,
  "id": null,
  "inputPricePerMillion": null,
  "model": null,
  "orgProviderKeyId": null,
  "outputPricePerMillion": null,
  "priceSource": null,
  "pricingId": null,
  "updatedAt": null,
} satisfies OrgProviderKeyModelPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrgProviderKeyModelPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


