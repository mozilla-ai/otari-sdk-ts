
# OrgProviderKeyModelUpdateRequest

Whether the runtime serves this model. The only field an update may change.  A rate is not here: an organization\'s rates live in ``organization_model_pricing`` and are written through ``/organizations/me/pricing``, so a price set on this surface and a price set on that one could not disagree.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean

## Example

```typescript
import type { OrgProviderKeyModelUpdateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
} satisfies OrgProviderKeyModelUpdateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrgProviderKeyModelUpdateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


