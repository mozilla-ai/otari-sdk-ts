
# UsageEntryPricingBreakdownInner


## Properties

Name | Type
------------ | -------------
`cost` | number
`meter` | string
`ratePerMillion` | number
`units` | [Units1](Units1.md)
`unitRate` | number

## Example

```typescript
import type { UsageEntryPricingBreakdownInner } from ''

// TODO: Update the object below with actual values
const example = {
  "cost": null,
  "meter": null,
  "ratePerMillion": null,
  "units": null,
  "unitRate": null,
} satisfies UsageEntryPricingBreakdownInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageEntryPricingBreakdownInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


