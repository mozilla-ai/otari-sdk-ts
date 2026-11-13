
# MRBetaMCPToolListingBlock

The tool listing the server fetched from an MCP server while producing this response. Send the assistant message back unchanged, this block included, so later requests use this listing instead of asking the MCP server again.

## Properties

Name | Type
------------ | -------------
`mcpServerName` | string
`tools` | [Array&lt;MRBetaMCPTool&gt;](MRBetaMCPTool.md)
`type` | string

## Example

```typescript
import type { MRBetaMCPToolListingBlock } from ''

// TODO: Update the object below with actual values
const example = {
  "mcpServerName": null,
  "tools": null,
  "type": null,
} satisfies MRBetaMCPToolListingBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaMCPToolListingBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


