
# HostedModelRates

The rates a hosted model is currently served at, and which rung of the deployment\'s ladder said so.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWritePricePerMillion` | number
`inputPricePerMillion` | number
`outputPricePerMillion` | number
`source` | string
`unit` | string

## Example

```typescript
import type { HostedModelRates } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "inputPricePerMillion": null,
  "outputPricePerMillion": null,
  "source": null,
  "unit": null,
} satisfies HostedModelRates

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedModelRates
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


