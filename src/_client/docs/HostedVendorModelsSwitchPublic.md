
# HostedVendorModelsSwitchPublic

What a vendor-wide switch did: how many models it changed, and how many it left off.  ``skipped_unpriced`` counts those left off for want of a rate, ``skipped_unavailable`` those the provider refused to serve, which an operator switches on one at a time.

## Properties

Name | Type
------------ | -------------
`changed` | number
`skippedUnavailable` | number
`skippedUnpriced` | number

## Example

```typescript
import type { HostedVendorModelsSwitchPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "changed": null,
  "skippedUnavailable": null,
  "skippedUnpriced": null,
} satisfies HostedVendorModelsSwitchPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedVendorModelsSwitchPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


