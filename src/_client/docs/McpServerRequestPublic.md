
# McpServerRequestPublic

One of the caller\'s own requests for a catalog server.

## Properties

Name | Type
------------ | -------------
`catalogName` | string
`catalogServer` | [McpCatalogServerPublic](McpCatalogServerPublic.md)
`createdAt` | Date
`decidedAt` | Date
`decisionReason` | string
`id` | string
`note` | string
`serverId` | string
`status` | string
`title` | string
`url` | string
`workspaceId` | string

## Example

```typescript
import type { McpServerRequestPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "catalogName": null,
  "catalogServer": null,
  "createdAt": null,
  "decidedAt": null,
  "decisionReason": null,
  "id": null,
  "note": null,
  "serverId": null,
  "status": null,
  "title": null,
  "url": null,
  "workspaceId": null,
} satisfies McpServerRequestPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpServerRequestPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


