
# HostedVendorModelsSwitchRequest

Set the switch of every model of one vendor at once.  ``enabled`` true serves each model that has a rate, and leaves one with none off. ``only_unpriced`` with ``enabled`` false withholds only the models served without a rate.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`onlyUnpriced` | boolean
`vendor` | string

## Example

```typescript
import type { HostedVendorModelsSwitchRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "onlyUnpriced": null,
  "vendor": null,
} satisfies HostedVendorModelsSwitchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedVendorModelsSwitchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


