
# WorkspaceMcpServerKeyAccess

What one key reaches on one stored server, and which rule decides it.

## Properties

Name | Type
------------ | -------------
`allowedTools` | Array&lt;string&gt;
`decidedBy` | string
`enabled` | boolean
`grantId` | string
`name` | string
`readTools` | Array&lt;string&gt;
`serverId` | string
`tools` | Array&lt;string&gt;

## Example

```typescript
import type { WorkspaceMcpServerKeyAccess } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedTools": null,
  "decidedBy": null,
  "enabled": null,
  "grantId": null,
  "name": null,
  "readTools": null,
  "serverId": null,
  "tools": null,
} satisfies WorkspaceMcpServerKeyAccess

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerKeyAccess
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


