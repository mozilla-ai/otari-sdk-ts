
# McpServerWorkspaceSettings

One workspace\'s settings on its organization\'s server, and whether the workspace reaches it.

## Properties

Name | Type
------------ | -------------
`attachByDefault` | boolean
`enabled` | boolean
`everyoneTools` | Array&lt;string&gt;
`organizationTools` | Array&lt;string&gt;
`reached` | boolean

## Example

```typescript
import type { McpServerWorkspaceSettings } from ''

// TODO: Update the object below with actual values
const example = {
  "attachByDefault": null,
  "enabled": null,
  "everyoneTools": null,
  "organizationTools": null,
  "reached": null,
} satisfies McpServerWorkspaceSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpServerWorkspaceSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


