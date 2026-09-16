
# PlaygroundToolsResponse

What the caller\'s workspace may attach to a Playground message.

## Properties

Name | Type
------------ | -------------
`codeExecution` | [PlaygroundToolStatus](PlaygroundToolStatus.md)
`mcpServers` | [Array&lt;PlaygroundMcpServer&gt;](PlaygroundMcpServer.md)
`webSearch` | [PlaygroundToolStatus](PlaygroundToolStatus.md)

## Example

```typescript
import type { PlaygroundToolsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "codeExecution": null,
  "mcpServers": null,
  "webSearch": null,
} satisfies PlaygroundToolsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundToolsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


