
# OAuthCallbackRequest

The authorization code a provider handed the browser.  No ``redirect_uri``: this deployment derives its own from ``public_base_url`` so the URI used to build the authorization request and the one sent with the exchange are the same string by construction, and a browser cannot choose what this server sends to a provider.  ``state`` is required, and is what binds this callback to an authorization request this deployment actually made: it is claimed from ``oauth_pending_state`` before the code is sent anywhere, and the row it claims is what carries the PKCE verifier the exchange needs. The flow cookie ``/authorize`` set travels alongside and binds it to the browser.

## Properties

Name | Type
------------ | -------------
`code` | string
`state` | string

## Example

```typescript
import type { OAuthCallbackRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "state": null,
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


