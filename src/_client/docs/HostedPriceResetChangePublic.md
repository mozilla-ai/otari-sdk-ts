
# HostedPriceResetChangePublic

One model a reset covers: the rate an operator set, and the default rate it moves to.

## Properties

Name | Type
------------ | -------------
`current` | [HostedModelRates](HostedModelRates.md)
`_default` | [HostedModelRates](HostedModelRates.md)
`matches` | boolean
`model` | string
`vendor` | string

## Example

```typescript
import type { HostedPriceResetChangePublic } from ''

// TODO: Update the object below with actual values
const example = {
  "current": null,
  "_default": null,
  "matches": null,
  "model": null,
  "vendor": null,
} satisfies HostedPriceResetChangePublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedPriceResetChangePublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


