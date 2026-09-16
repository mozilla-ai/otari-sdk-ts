
# WorkspaceCodeExecutionPolicyPublic

A workspace\'s policy, or the unconfigured policy it has without one.

## Properties

Name | Type
------------ | -------------
`allowedImages` | Array&lt;string&gt;
`availableTools` | Array&lt;string&gt;
`configured` | boolean
`createdAt` | string
`defaultPurposeHint` | string
`enabled` | boolean
`execTimeoutS` | number
`image` | string
`maxIterations` | number
`sandboxConfigured` | boolean
`tools` | Array&lt;string&gt;
`updatedAt` | string
`workspaceId` | string

## Example

```typescript
import type { WorkspaceCodeExecutionPolicyPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedImages": null,
  "availableTools": null,
  "configured": null,
  "createdAt": null,
  "defaultPurposeHint": null,
  "enabled": null,
  "execTimeoutS": null,
  "image": null,
  "maxIterations": null,
  "sandboxConfigured": null,
  "tools": null,
  "updatedAt": null,
  "workspaceId": null,
} satisfies WorkspaceCodeExecutionPolicyPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceCodeExecutionPolicyPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


