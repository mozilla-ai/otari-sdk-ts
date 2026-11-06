
# UnitRateOutput

One price: of a modality\'s input or output, or of web search.

## Properties

Name | Type
------------ | -------------
`cache` | [CacheRatesOutput](CacheRatesOutput.md)
`overrides` | [Array&lt;RateOverrideOutput&gt;](RateOverrideOutput.md)
`price` | number
`reasoning` | number
`unit` | string

## Example

```typescript
import type { UnitRateOutput } from ''

// TODO: Update the object below with actual values
const example = {
  "cache": null,
  "overrides": null,
  "price": null,
  "reasoning": null,
  "unit": null,
} satisfies UnitRateOutput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnitRateOutput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


