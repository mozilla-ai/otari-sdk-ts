
# WorkspaceMcpServerSettingsUpdate

A change to a workspace\'s own settings on its organization\'s server. A field left out keeps what is stored.

## Properties

Name | Type
------------ | -------------
`attachByDefault` | boolean
`enabled` | boolean
`everyoneTools` | Array&lt;string&gt;

## Example

```typescript
import type { WorkspaceMcpServerSettingsUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "attachByDefault": null,
  "enabled": null,
  "everyoneTools": null,
} satisfies WorkspaceMcpServerSettingsUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerSettingsUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


