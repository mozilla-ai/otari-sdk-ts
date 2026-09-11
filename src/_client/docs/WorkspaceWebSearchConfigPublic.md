
# WorkspaceWebSearchConfigPublic

A workspace\'s web-search configuration, or the unconfigured one it has without a row.

## Properties

Name | Type
------------ | -------------
`allowedDomains` | Array&lt;string&gt;
`blockedDomains` | Array&lt;string&gt;
`configured` | boolean
`createdAt` | string
`enabled` | boolean
`maxResults` | number
`providerOptions` | { [key: string]: any; }
`purposeHint` | string
`updatedAt` | string
`webSearchConfigured` | boolean
`workspaceId` | string

## Example

```typescript
import type { WorkspaceWebSearchConfigPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedDomains": null,
  "blockedDomains": null,
  "configured": null,
  "createdAt": null,
  "enabled": null,
  "maxResults": null,
  "providerOptions": null,
  "purposeHint": null,
  "updatedAt": null,
  "webSearchConfigured": null,
  "workspaceId": null,
} satisfies WorkspaceWebSearchConfigPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceWebSearchConfigPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


