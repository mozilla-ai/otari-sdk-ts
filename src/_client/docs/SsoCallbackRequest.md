
# SsoCallbackRequest

The authorization code a provider handed the browser, for a sign-in through one organization\'s own connection.  No ``slug``: the pending authorization the ``state`` names already resolves to one connection, so a browser cannot redeem a code against a connection other than the one that minted the state.

## Properties

Name | Type
------------ | -------------
`code` | string
`iss` | string
`state` | string
`termsAccepted` | boolean

## Example

```typescript
import type { SsoCallbackRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "iss": null,
  "state": null,
  "termsAccepted": null,
} satisfies SsoCallbackRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SsoCallbackRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


