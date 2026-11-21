
# McpServerConnectionPublic

One user connected to a per-user MCP server, as a workspace manager sees them. Never carries a token.

## Properties

Name | Type
------------ | -------------
`connectedAt` | Date
`email` | string
`fullName` | string
`updatedAt` | Date
`userId` | string

## Example

```typescript
import type { McpServerConnectionPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "connectedAt": null,
  "email": null,
  "fullName": null,
  "updatedAt": null,
  "userId": null,
} satisfies McpServerConnectionPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpServerConnectionPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


