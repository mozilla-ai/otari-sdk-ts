
# CallToolResult

The server\'s response to a tool call.  Errors that originate from the tool SHOULD be reported inside the result with `is_error` set to true, not as an MCP protocol-level error, so the LLM can see and self-correct. Errors in finding the tool, or any other exceptional condition, should be reported as an MCP error response.

## Properties

Name | Type
------------ | -------------
`meta` | { [key: string]: any; }
`content` | [Array&lt;ContentInner&gt;](ContentInner.md)
`isError` | boolean
`resultType` | [Resulttype](Resulttype.md)
`structuredContent` | any

## Example

```typescript
import type { CallToolResult } from ''

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "content": null,
  "isError": null,
  "resultType": null,
  "structuredContent": null,
} satisfies CallToolResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CallToolResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


