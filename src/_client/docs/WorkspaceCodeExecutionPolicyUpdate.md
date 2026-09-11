
# WorkspaceCodeExecutionPolicyUpdate

The policy to store for a workspace, as a whole.  ``PUT`` semantics, ported from the hosted ``CodeExecutionConfigUpsert``: what is sent is what the workspace has afterwards, so an omitted limit is cleared rather than left as it was.

## Properties

Name | Type
------------ | -------------
`defaultPurposeHint` | string
`enabled` | boolean
`execTimeoutS` | number
`image` | string
`maxIterations` | number
`tools` | Array&lt;string&gt;

## Example

```typescript
import type { WorkspaceCodeExecutionPolicyUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "defaultPurposeHint": null,
  "enabled": null,
  "execTimeoutS": null,
  "image": null,
  "maxIterations": null,
  "tools": null,
} satisfies WorkspaceCodeExecutionPolicyUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceCodeExecutionPolicyUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


