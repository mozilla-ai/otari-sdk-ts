
# WorkspaceAssignmentRequest

A workspace and the role to grant in it, applied when a member is added.

## Properties

Name | Type
------------ | -------------
`role` | string
`workspaceId` | string

## Example

```typescript
import type { WorkspaceAssignmentRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "role": null,
  "workspaceId": null,
} satisfies WorkspaceAssignmentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceAssignmentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


