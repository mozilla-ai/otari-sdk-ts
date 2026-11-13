
# OIDCConnectionPublic

An organization\'s own sign-in connection, as its admins see it.  Carries ``client_secret_last4`` and never the secret itself.

## Properties

Name | Type
------------ | -------------
`clientId` | string
`clientSecretLast4` | string
`defaultRole` | string
`discoveredAt` | Date
`displayName` | string
`domains` | [Array&lt;OIDCConnectionDomain&gt;](OIDCConnectionDomain.md)
`enabled` | boolean
`id` | string
`issuer` | string
`resolvedIssuer` | string

## Example

```typescript
import type { OIDCConnectionPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "clientId": null,
  "clientSecretLast4": null,
  "defaultRole": null,
  "discoveredAt": null,
  "displayName": null,
  "domains": null,
  "enabled": null,
  "id": null,
  "issuer": null,
  "resolvedIssuer": null,
} satisfies OIDCConnectionPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OIDCConnectionPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


