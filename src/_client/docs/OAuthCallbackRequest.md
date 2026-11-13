
# OAuthCallbackRequest

The authorization code a provider handed the browser.  No ``redirect_uri``: this deployment derives its own from ``public_base_url`` so the URI used to build the authorization request and the one sent with the exchange are the same string by construction, and a browser cannot choose what this server sends to a provider.  ``state`` is required, and is what binds this callback to an authorization request this deployment actually made. The flow cookie carries the token that state names, so it binds the callback to the browser as well.

## Properties

Name | Type
------------ | -------------
`code` | string
`state` | string
`termsAccepted` | boolean

## Example

```typescript
import type { OAuthCallbackRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "state": null,
  "termsAccepted": null,
} satisfies OAuthCallbackRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthCallbackRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


