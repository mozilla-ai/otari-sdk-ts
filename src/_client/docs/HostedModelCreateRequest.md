
# HostedModelCreateRequest

Offer a model on a hosted provider, optionally at a custom price.  Omitting the rates means the deployment serves the model at whatever the price ladder already answers: a stored deployment price, else the community default, which the offer stores as the deployment\'s own rate. ``unit`` is what the rates are per, as on ``POST /pricing``: a request or image rate is still stored per million.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWritePricePerMillion` | number
`inputPricePerMillion` | number
`model` | string
`outputPricePerMillion` | number
`unit` | string

## Example

```typescript
import type { HostedModelCreateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "inputPricePerMillion": null,
  "model": null,
  "outputPricePerMillion": null,
  "unit": null,
} satisfies HostedModelCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedModelCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


