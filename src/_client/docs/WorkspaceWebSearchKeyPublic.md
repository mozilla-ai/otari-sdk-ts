
# WorkspaceWebSearchKeyPublic

One of the organization\'s keys, as one workspace sees it.

## Properties

Name | Type
------------ | -------------
`disabled` | boolean
`isDefault` | boolean
`isEffective` | boolean
`last4` | string
`name` | string
`orgWebSearchKeyId` | string
`provider` | string
`usable` | boolean
`workspaceId` | string

## Example

```typescript
import type { WorkspaceWebSearchKeyPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "disabled": null,
  "isDefault": null,
  "isEffective": null,
  "last4": null,
  "name": null,
  "orgWebSearchKeyId": null,
  "provider": null,
  "usable": null,
  "workspaceId": null,
} satisfies WorkspaceWebSearchKeyPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceWebSearchKeyPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


