
# OrganizationSsoPublic

An organization\'s own OIDC connection, and what to register at the provider.

## Properties

Name | Type
------------ | -------------
`connection` | [OIDCConnectionPublic](OIDCConnectionPublic.md)
`enforcement` | [OrganizationSsoEnforcementPublic](OrganizationSsoEnforcementPublic.md)
`redirectUri` | string

## Example

```typescript
import type { OrganizationSsoPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "connection": null,
  "enforcement": null,
  "redirectUri": null,
} satisfies OrganizationSsoPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationSsoPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


