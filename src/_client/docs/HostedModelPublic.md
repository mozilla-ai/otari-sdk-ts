
# HostedModelPublic

One offered model, with the price the deployment currently serves it at.  ``price_source`` says which rung of the deployment\'s ladder answered: ``deployment`` for a rate an operator set, ``defaults`` for the community-maintained rate, whether this surface stored it or the fallback supplies it, and None when nothing prices the model yet. ``unit`` says what the rates are per, so a per-request rate is not read as a per-token one. ``enabled`` is the serving switch; a model offered without a discoverable price starts off.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWritePricePerMillion` | number
`createdAt` | Date
`enabled` | boolean
`id` | string
`inputPricePerMillion` | number
`model` | string
`outputPricePerMillion` | number
`priceSource` | string
`provider` | string
`unit` | string
`updatedAt` | Date

## Example

```typescript
import type { HostedModelPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "createdAt": null,
  "enabled": null,
  "id": null,
  "inputPricePerMillion": null,
  "model": null,
  "outputPricePerMillion": null,
  "priceSource": null,
  "provider": null,
  "unit": null,
  "updatedAt": null,
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


