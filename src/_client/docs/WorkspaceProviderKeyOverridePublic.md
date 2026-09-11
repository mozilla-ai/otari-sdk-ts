
# WorkspaceProviderKeyOverridePublic

The effective view for one workspace+key: raw override flags plus the resolution.

## Properties

Name | Type
------------ | -------------
`disabled` | boolean
`isDefault` | boolean
`isEffectiveDefault` | boolean
`isEffectiveEnabled` | boolean
`orgProviderKeyId` | string
`workspaceId` | string

## Example

```typescript
import type { WorkspaceProviderKeyOverridePublic } from ''

// TODO: Update the object below with actual values
const example = {
  "disabled": null,
  "isDefault": null,
  "isEffectiveDefault": null,
  "isEffectiveEnabled": null,
  "orgProviderKeyId": null,
  "workspaceId": null,
} satisfies WorkspaceProviderKeyOverridePublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceProviderKeyOverridePublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


