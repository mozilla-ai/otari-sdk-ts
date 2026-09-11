
# WorkspaceWebSearchConfigUpdate

The configuration to store for a workspace, as a whole.  ``PUT`` semantics, ported from the hosted ``WorkspaceWebSearchConfigUpdate``: what is sent is what the workspace has afterwards, so an omitted field is cleared rather than left as it was.

## Properties

Name | Type
------------ | -------------
`allowedDomains` | Array&lt;string&gt;
`blockedDomains` | Array&lt;string&gt;
`enabled` | boolean
`maxResults` | number
`providerOptions` | { [key: string]: any; }
`purposeHint` | string

## Example

```typescript
import type { WorkspaceWebSearchConfigUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedDomains": null,
  "blockedDomains": null,
  "enabled": null,
  "maxResults": null,
  "providerOptions": null,
  "purposeHint": null,
} satisfies WorkspaceWebSearchConfigUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceWebSearchConfigUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


