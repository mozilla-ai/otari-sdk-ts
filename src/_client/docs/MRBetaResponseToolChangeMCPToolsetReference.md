
# MRBetaResponseToolChangeMCPToolsetReference

Reference to every tool in the named MCP server\'s toolset, as a ``compaction`` block\'s ``tool_changes`` entry reports it. Send it back unchanged with the block.

## Properties

Name | Type
------------ | -------------
`serverName` | string
`type` | string

## Example

```typescript
import type { MRBetaResponseToolChangeMCPToolsetReference } from ''

// TODO: Update the object below with actual values
const example = {
  "serverName": null,
  "type": null,
} satisfies MRBetaResponseToolChangeMCPToolsetReference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaResponseToolChangeMCPToolsetReference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


