
# CatalogOffering

One way this deployment can call a model: a selector on a provider.

## Properties

Name | Type
------------ | -------------
`contextWindow` | number
`credential` | string
`discovered` | boolean
`maxOutputTokens` | number
`metadataInputPricePerMillion` | number
`metadataOutputPricePerMillion` | number
`priceReference` | string
`priceSource` | string
`pricing` | [ModelPricingInfo](ModelPricingInfo.md)
`provider` | string
`providerType` | string
`quantization` | string
`selector` | string
`shortSelector` | string
`usage30d` | [OfferingUsage](OfferingUsage.md)

## Example

```typescript
import type { CatalogOffering } from ''

// TODO: Update the object below with actual values
const example = {
  "contextWindow": null,
  "credential": null,
  "discovered": null,
  "maxOutputTokens": null,
  "metadataInputPricePerMillion": null,
  "metadataOutputPricePerMillion": null,
  "priceReference": null,
  "priceSource": null,
  "pricing": null,
  "provider": null,
  "providerType": null,
  "quantization": null,
  "selector": null,
  "shortSelector": null,
  "usage30d": null,
} satisfies CatalogOffering

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogOffering
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


