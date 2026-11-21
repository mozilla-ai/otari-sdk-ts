
# McpConnectionPublic

One of the caller\'s own connections. Never carries a token.

## Properties

Name | Type
------------ | -------------
`connectedAt` | Date
`expiresAt` | Date
`renewable` | boolean
`serverId` | string
`updatedAt` | Date

## Example

```typescript
import type { McpConnectionPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "connectedAt": null,
  "expiresAt": null,
  "renewable": null,
  "serverId": null,
  "updatedAt": null,
} satisfies McpConnectionPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpConnectionPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


