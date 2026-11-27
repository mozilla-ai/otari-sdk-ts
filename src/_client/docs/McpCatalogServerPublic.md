
# McpCatalogServerPublic

One remote MCP server the catalog lists.

## Properties

Name | Type
------------ | -------------
`description` | string
`iconUrl` | string
`id` | string
`logoTone` | string
`logoUrl` | string
`name` | string
`publisherKind` | string
`requiresToken` | boolean
`source` | string
`title` | string
`url` | string
`version` | string
`websiteUrl` | string

## Example

```typescript
import type { McpCatalogServerPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "iconUrl": null,
  "id": null,
  "logoTone": null,
  "logoUrl": null,
  "name": null,
  "publisherKind": null,
  "requiresToken": null,
  "source": null,
  "title": null,
  "url": null,
  "version": null,
  "websiteUrl": null,
} satisfies McpCatalogServerPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpCatalogServerPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


