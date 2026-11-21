
# McpServerRequestCreate

A member asking the workspace\'s admins to add one server of the MCP catalog.

## Properties

Name | Type
------------ | -------------
`catalogName` | string
`note` | string

## Example

```typescript
import type { McpServerRequestCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "catalogName": null,
  "note": null,
} satisfies McpServerRequestCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpServerRequestCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


