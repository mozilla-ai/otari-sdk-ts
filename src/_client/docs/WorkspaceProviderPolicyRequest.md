
# WorkspaceProviderPolicyRequest

What one workspace requires of every provider serving it.

## Properties

Name | Type
------------ | -------------
`requireZeroDataRetention` | boolean

## Example

```typescript
import type { WorkspaceProviderPolicyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "requireZeroDataRetention": null,
} satisfies WorkspaceProviderPolicyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceProviderPolicyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


