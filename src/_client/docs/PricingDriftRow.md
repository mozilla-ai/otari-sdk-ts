
# PricingDriftRow

A stored deployment rate beside the default it shadows.

## Properties

Name | Type
------------ | -------------
`defaultInputPricePerMillion` | number
`defaultOutputPricePerMillion` | number
`defaultReference` | string
`effectiveAt` | string
`inputDeltaPercent` | number
`inputPricePerMillion` | number
`modelKey` | string
`origin` | string
`outputDeltaPercent` | number
`outputPricePerMillion` | number
`unit` | string

## Example

```typescript
import type { PricingDriftRow } from ''

// TODO: Update the object below with actual values
const example = {
  "defaultInputPricePerMillion": null,
  "defaultOutputPricePerMillion": null,
  "defaultReference": null,
  "effectiveAt": null,
  "inputDeltaPercent": null,
  "inputPricePerMillion": null,
  "modelKey": null,
  "origin": null,
  "outputDeltaPercent": null,
  "outputPricePerMillion": null,
  "unit": null,
} satisfies PricingDriftRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PricingDriftRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


