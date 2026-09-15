
# PlaygroundMcpServer

One of the workspace\'s MCP servers, as the tools menu lists it.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`id` | string
`name` | string
`purposeHint` | string

## Example

```typescript
import type { PlaygroundMcpServer } from ''

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "id": null,
  "name": null,
  "purposeHint": null,
} satisfies PlaygroundMcpServer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundMcpServer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


