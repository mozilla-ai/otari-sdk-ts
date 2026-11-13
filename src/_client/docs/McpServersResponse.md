
# McpServersResponse

The enabled stored servers the authenticated key can reach.

## Properties

Name | Type
------------ | -------------
`servers` | [Array&lt;McpServerSummary&gt;](McpServerSummary.md)

## Example

```typescript
import type { McpServersResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "servers": null,
} satisfies McpServersResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpServersResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


