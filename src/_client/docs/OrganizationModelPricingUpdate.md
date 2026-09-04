
# OrganizationModelPricingUpdate

Replace an override\'s rates and period.  ``effective_from`` is required here, where a create defaults it to now. A replacement states the whole row, so defaulting an omitted start would move a stored period to the present: an operator editing next quarter\'s rate through a client that does not send the field would silently bring it into effect today, or collide with the period that currently applies. Stating it is the only reading that cannot surprise.  A full replacement rather than a patch: every rate field is present in the body and an omitted optional rate is cleared, so the stored row is exactly what was sent. That is the opposite of ``POST /v1/pricing``, which inherits an omitted cache rate from the model\'s previous version, and deliberately so: that surface versions a catalog where each write adds a row, while this one edits a single row in place and an inheriting patch would make the result depend on what happened to be stored before.  ``model_key`` is absent because it is immutable. Repointing an override at another model is retiring one and creating another, which is two requests.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWrite1hPricePerMillion` | number
`cacheWritePricePerMillion` | number
`effectiveFrom` | Date
`effectiveTo` | Date
`inputPricePerMillion` | number
`outputPricePerMillion` | number
`pricingTiers` | [Array&lt;PricingTier&gt;](PricingTier.md)

## Example

```typescript
import type { OrganizationModelPricingUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWrite1hPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "effectiveFrom": null,
  "effectiveTo": null,
  "inputPricePerMillion": null,
  "outputPricePerMillion": null,
  "pricingTiers": null,
} satisfies OrganizationModelPricingUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationModelPricingUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


