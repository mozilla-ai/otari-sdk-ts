
# ClientRegistrationResponse

RFC 7591 section 3.2.1: the registration as recorded. Every client registered here is public.

## Properties

Name | Type
------------ | -------------
`clientId` | string
`clientIdIssuedAt` | number
`clientName` | string
`grantTypes` | Array&lt;string&gt;
`redirectUris` | Array&lt;string&gt;
`responseTypes` | Array&lt;string&gt;
`tokenEndpointAuthMethod` | string

## Example

```typescript
import type { ClientRegistrationResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "clientId": null,
  "clientIdIssuedAt": null,
  "clientName": null,
  "grantTypes": null,
  "redirectUris": null,
  "responseTypes": null,
  "tokenEndpointAuthMethod": null,
} satisfies ClientRegistrationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ClientRegistrationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


