
# PricingResponse

Response model for model pricing.

## Properties

Name | Type
------------ | -------------
`createdAt` | string
`effectiveAt` | string
`inputPricePerMillion` | number
`modelKey` | string
`outputPricePerMillion` | number
`updatedAt` | string

## Example

```typescript
import type { PricingResponse } from 'otari-control-plane'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "effectiveAt": null,
  "inputPricePerMillion": null,
  "modelKey": null,
  "outputPricePerMillion": null,
  "updatedAt": null,
} satisfies PricingResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PricingResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


