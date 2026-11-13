
# McpServerSummary

A stored server as a caller sees it: enough to name it in ``mcp_server_ids``, never its URL or token.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`purposeHint` | string

## Example

```typescript
import type { McpServerSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "purposeHint": null,
} satisfies McpServerSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpServerSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


