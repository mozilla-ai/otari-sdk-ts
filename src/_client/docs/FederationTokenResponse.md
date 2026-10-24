
# FederationTokenResponse

An access token, as RFC 6749 section 5.1 shapes it. Present it as a bearer token in place of the key.

## Properties

Name | Type
------------ | -------------
`accessToken` | string
`expiresIn` | number
`tokenType` | string

## Example

```typescript
import type { FederationTokenResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "accessToken": null,
  "expiresIn": null,
  "tokenType": null,
} satisfies FederationTokenResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FederationTokenResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


