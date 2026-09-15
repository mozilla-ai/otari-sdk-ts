
# WorkspaceMcpServerPublic

The API-facing shape. Never carries the token, only whether one is set.  No ``last4``-style prefix either, unlike `OrgProviderKeyPublic`: a provider key\'s last four digits let an operator match a stored key against the one in their provider\'s console, and there is no equivalent workflow for an MCP bearer token.

## Properties

Name | Type
------------ | -------------
`allowedTools` | Array&lt;string&gt;
`createdAt` | string
`enabled` | boolean
`hasToken` | boolean
`id` | string
`name` | string
`purposeHint` | string
`updatedAt` | string
`url` | string
`workspaceId` | string

## Example

```typescript
import type { WorkspaceMcpServerPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedTools": null,
  "createdAt": null,
  "enabled": null,
  "hasToken": null,
  "id": null,
  "name": null,
  "purposeHint": null,
  "updatedAt": null,
  "url": null,
  "workspaceId": null,
} satisfies WorkspaceMcpServerPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


