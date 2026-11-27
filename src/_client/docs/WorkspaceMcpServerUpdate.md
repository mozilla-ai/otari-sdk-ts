
# WorkspaceMcpServerUpdate

Partial update. Only the fields the caller sets are applied.  ``authorization_token`` has three states rather than two, which is what a write-only field needs: omit it to leave the stored token alone, send ``\"\"`` to clear it, send a value to rotate it. An explicit ``null`` also leaves it alone, matching the platform: a client that serializes its whole form back, with an empty token box it never filled in, must not destroy a token it was never shown. ``oauth_client_secret`` follows the same three states, and so does ``oauth_client_id``, where ``\"\"`` goes back to letting Otari register itself.  Changing ``credential_mode``, the URL, or the OAuth client ends every sign-in to the server, each user\'s own and the shared account: the tokens were issued for the server and the client as they were. Setting a token on a shared server ends its shared account too, since a server sends one credential.

## Properties

Name | Type
------------ | -------------
`allowedTools` | Array&lt;string&gt;
`attachByDefault` | boolean
`authorizationToken` | string
`credentialMode` | [McpCredentialMode](McpCredentialMode.md)
`enabled` | boolean
`everyoneTools` | Array&lt;string&gt;
`name` | string
`oauthClientId` | string
`oauthClientSecret` | string
`purposeHint` | string
`readTools` | Array&lt;string&gt;
`url` | string

## Example

```typescript
import type { WorkspaceMcpServerUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedTools": null,
  "attachByDefault": null,
  "authorizationToken": null,
  "credentialMode": null,
  "enabled": null,
  "everyoneTools": null,
  "name": null,
  "oauthClientId": null,
  "oauthClientSecret": null,
  "purposeHint": null,
  "readTools": null,
  "url": null,
} satisfies WorkspaceMcpServerUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


