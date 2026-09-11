
# UnitChargeLine

A charge line billed per call, for gateway-run tools and per-request routes.  ``unit_rate`` is the discriminator, in the same sense as :class:`TokenChargeLine`\'s ``rate_per_million``.

## Properties

Name | Type
------------ | -------------
`cost` | number
`meter` | string
`unitRate` | number
`units` | [Units1](Units1.md)

## Example

```typescript
import type { UnitChargeLine } from ''

// TODO: Update the object below with actual values
const example = {
  "cost": null,
  "meter": null,
  "unitRate": null,
  "units": null,
} satisfies UnitChargeLine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnitChargeLine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


