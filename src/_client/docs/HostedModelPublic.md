
# HostedModelPublic

One offered model, with the price the deployment currently serves it at.  ``price_source`` says which rung of the deployment\'s ladder answered: ``deployment`` for a rate an operator set, ``provider`` for the rate the provider\'s own listing named, ``defaults`` for the community-maintained rate, whether this surface stored it or the fallback supplies it, and None when nothing prices the model yet. ``unit`` says what the rates are per, so a per-request rate is not read as a per-token one. ``enabled`` is the serving switch; a model offered without a discoverable price starts off. ``disabled_reason`` says why a model is off: ``unpriced`` while it waits for a rate, ``operator`` when an operator switched it off, ``unavailable`` when its provider refused to serve it. ``type`` is the kind of model, from models.dev, and None when it does not know. ``vendor`` is who makes the model, ``Other`` when nothing names one. ``default_rates`` is what the default rung (models.dev, or the provider\'s own listing) would price a model an operator priced, where it prices it and the two differ; None otherwise. ``region_rates`` holds, by region slug, the rates a region of the provider sets of its own (stored under ``<provider>@<slug>:<model>`` through the pricing endpoint); a region absent from it settles at the provider\'s rate.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWritePricePerMillion` | number
`createdAt` | Date
`defaultRates` | [HostedModelRates](HostedModelRates.md)
`disabledReason` | string
`enabled` | boolean
`id` | string
`inputPricePerMillion` | number
`model` | string
`outputPricePerMillion` | number
`priceSource` | string
`provider` | string
`regionRates` | [{ [key: string]: HostedModelRates; }](HostedModelRates.md)
`type` | string
`unit` | string
`updatedAt` | Date
`vendor` | string

## Example

```typescript
import type { HostedModelPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "createdAt": null,
  "defaultRates": null,
  "disabledReason": null,
  "enabled": null,
  "id": null,
  "inputPricePerMillion": null,
  "model": null,
  "outputPricePerMillion": null,
  "priceSource": null,
  "provider": null,
  "regionRates": null,
  "type": null,
  "unit": null,
  "updatedAt": null,
  "vendor": null,
} satisfies HostedModelPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedModelPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


