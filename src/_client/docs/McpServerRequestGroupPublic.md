
# McpServerRequestGroupPublic

Everyone waiting for one catalog server in a workspace.

## Properties

Name | Type
------------ | -------------
`catalogName` | string
`catalogServer` | [McpCatalogServerPublic](McpCatalogServerPublic.md)
`firstRequestedAt` | Date
`requesterCount` | number
`requesters` | [Array&lt;McpServerRequesterPublic&gt;](McpServerRequesterPublic.md)
`title` | string
`url` | string

## Example

```typescript
import type { McpServerRequestGroupPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "catalogName": null,
  "catalogServer": null,
  "firstRequestedAt": null,
  "requesterCount": null,
  "requesters": null,
  "title": null,
  "url": null,
} satisfies McpServerRequestGroupPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpServerRequestGroupPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


