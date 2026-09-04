
# TokenChargeLine

A charge line billed per million tokens.  ``rate_per_million`` is the discriminator: its presence (rather than ``unit_rate``) is what tells a reader, and a renderer, which unit convention applies. See ``gateway.services.pricing_service``.

## Properties

Name | Type
------------ | -------------
`cost` | number
`meter` | string
`ratePerMillion` | number
`units` | [Units](Units.md)

## Example

```typescript
import type { TokenChargeLine } from ''

// TODO: Update the object below with actual values
const example = {
  "cost": null,
  "meter": null,
  "ratePerMillion": null,
  "units": null,
} satisfies TokenChargeLine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenChargeLine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


