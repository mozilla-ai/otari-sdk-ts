
# AppTokenResponse

A minted app key or access token, as RFC 6749 section 5.1 shapes it.

## Properties

Name | Type
------------ | -------------
`accessToken` | string
`expiresIn` | number
`manageUrl` | string
`refreshToken` | string
`scope` | string
`tokenType` | string

## Example

```typescript
import type { AppTokenResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "accessToken": null,
  "expiresIn": null,
  "manageUrl": null,
  "refreshToken": null,
  "scope": null,
  "tokenType": null,
} satisfies AppTokenResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AppTokenResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


