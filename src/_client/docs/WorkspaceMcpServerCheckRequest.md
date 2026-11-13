
# WorkspaceMcpServerCheckRequest

Connection details to check without storing them, for a form to test before it saves.  ``server_id`` names a stored server whose token stands in when ``authorization_token`` is omitted, so an edit form can test a new URL with a token it was never shown. ``\"\"`` checks with no token at all.

## Properties

Name | Type
------------ | -------------
`allowedTools` | Array&lt;string&gt;
`authorizationToken` | string
`serverId` | string
`url` | string

## Example

```typescript
import type { WorkspaceMcpServerCheckRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedTools": null,
  "authorizationToken": null,
  "serverId": null,
  "url": null,
} satisfies WorkspaceMcpServerCheckRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerCheckRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


