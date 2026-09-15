
# WorkspaceMcpServerUpdate

Partial update. Only the fields the caller sets are applied.  ``authorization_token`` has three states rather than two, which is what a write-only field needs: omit it to leave the stored token alone, send ``\"\"`` to clear it, send a value to rotate it. An explicit ``null`` also leaves it alone, matching the platform: a client that serializes its whole form back, with an empty token box it never filled in, must not destroy a token it was never shown.

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
import type { WorkspaceMcpServerUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedTools": null,
  "authorizationToken": null,
  "enabled": null,
  "name": null,
  "purposeHint": null,
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


