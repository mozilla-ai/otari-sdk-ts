
# WorkspaceMcpServerCreate

Request body for registering a server.  ``authorization_token`` is never stored as sent: it is encrypted with ``OTARI_SECRET_KEY`` and only the ciphertext is kept, the same convention `entities.ProviderCredential` and `OrgProviderKey` already use.

## Properties

Name | Type
------------ | -------------
`allowedTools` | Array&lt;string&gt;
`authorizationToken` | string
`enabled` | boolean
`name` | string
`purposeHint` | string
`url` | string

## Example

```typescript
import type { WorkspaceMcpServerCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedTools": null,
  "authorizationToken": null,
  "enabled": null,
  "name": null,
  "purposeHint": null,
  "url": null,
} satisfies WorkspaceMcpServerCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


