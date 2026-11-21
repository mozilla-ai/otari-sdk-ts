
# McpConnectionCompleted

A finished sign-in: which server it connected, and where to land.

## Properties

Name | Type
------------ | -------------
`checked` | boolean
`returnTo` | string
`serverId` | string
`serverName` | string
`shared` | boolean
`workspaceId` | string

## Example

```typescript
import type { McpConnectionCompleted } from ''

// TODO: Update the object below with actual values
const example = {
  "checked": null,
  "returnTo": null,
  "serverId": null,
  "serverName": null,
  "shared": null,
  "workspaceId": null,
} satisfies McpConnectionCompleted

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpConnectionCompleted
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


