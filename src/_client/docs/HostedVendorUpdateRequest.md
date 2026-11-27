
# HostedVendorUpdateRequest

Switch a vendor on or off on one hosted provider.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`vendor` | string

## Example

```typescript
import type { HostedVendorUpdateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "vendor": null,
} satisfies HostedVendorUpdateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedVendorUpdateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


