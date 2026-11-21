
# McpToolSummary

One tool of a server: its name and, where the server described it, the first line of that description.

## Properties

Name | Type
------------ | -------------
`description` | string
`name` | string
`readOnly` | boolean

## Example

```typescript
import type { McpToolSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "name": null,
  "readOnly": null,
} satisfies McpToolSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpToolSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


