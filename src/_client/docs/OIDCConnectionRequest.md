
# OIDCConnectionRequest

What an organization administrator submits to configure its own sign-in connection.  Whether the connection admits sign-in is not here: `OIDCConnectionEnabledRequest` is the only way to change it, so storing a connection can neither pause nor resume one.

## Properties

Name | Type
------------ | -------------
`clientId` | string
`clientSecret` | string
`defaultRole` | string
`displayName` | string
`issuer` | string

## Example

```typescript
import type { OIDCConnectionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "clientId": null,
  "clientSecret": null,
  "defaultRole": null,
  "displayName": null,
  "issuer": null,
} satisfies OIDCConnectionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OIDCConnectionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


