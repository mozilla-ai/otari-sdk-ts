
# HostedVendorPublic

One vendor whose models a hosted provider offers, and what it serves of them.  ``enabled`` is the vendor\'s switch: off withholds every model of the vendor, including ones offered later, and keeps each model\'s own switch. The counts cover the whole provider, whatever the list was narrowed to: ``serving`` the models served, ``unpriced`` those held off for want of a rate, ``unavailable`` those the provider refused to serve, and ``custom_differs`` those an operator priced where the default rate now says something else.

## Properties

Name | Type
------------ | -------------
`customDiffers` | number
`enabled` | boolean
`serving` | number
`total` | number
`unavailable` | number
`unpriced` | number
`vendor` | string

## Example

```typescript
import type { HostedVendorPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "customDiffers": null,
  "enabled": null,
  "serving": null,
  "total": null,
  "unavailable": null,
  "unpriced": null,
  "vendor": null,
} satisfies HostedVendorPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedVendorPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


