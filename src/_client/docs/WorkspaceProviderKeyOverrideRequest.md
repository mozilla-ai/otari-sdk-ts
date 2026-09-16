
# WorkspaceProviderKeyOverrideRequest

Tri-state: an omitted field leaves that flag unchanged.  Both fields false, whether that is the merged result or a value sent explicitly, is a no-op the service deletes rather than stores: absence of a row already means full inheritance from the organization default. Setting one true auto-resolves the other when they would otherwise conflict (pinning re-enables a disabled key; disabling un-pins a pinned one); sending both true explicitly is refused.

## Properties

Name | Type
------------ | -------------
`disabled` | boolean
`isDefault` | boolean

## Example

```typescript
import type { WorkspaceProviderKeyOverrideRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "disabled": null,
  "isDefault": null,
} satisfies WorkspaceProviderKeyOverrideRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceProviderKeyOverrideRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


