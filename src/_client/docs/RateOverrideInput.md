
# RateOverrideInput

The prices that replace a price\'s own when a condition holds.

## Properties

Name | Type
------------ | -------------
`cache` | [CacheRatesInput](CacheRatesInput.md)
`price` | number
`reasoning` | number
`when` | { [key: string]: any; }

## Example

```typescript
import type { RateOverrideInput } from ''

// TODO: Update the object below with actual values
const example = {
  "cache": null,
  "price": null,
  "reasoning": null,
  "when": null,
} satisfies RateOverrideInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RateOverrideInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


