
# WorkspaceWebSearchKeyOverrideRequest

Tri-state: an omitted flag keeps its value.  Pinning a key re-enables it and unpins any other key of the workspace, and turning a key off unpins it. Sending both flags true is refused. Both false deletes the override.

## Properties

Name | Type
------------ | -------------
`disabled` | boolean
`isDefault` | boolean

## Example

```typescript
import type { WorkspaceWebSearchKeyOverrideRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "disabled": null,
  "isDefault": null,
} satisfies WorkspaceWebSearchKeyOverrideRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceWebSearchKeyOverrideRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


