
# MRBetaResponseToolChangeMCPToolReference

Reference to a single MCP tool, by its server and its name on that server, as a ``compaction`` block\'s ``tool_changes`` entry reports it. Send it back unchanged with the block.

## Properties

Name | Type
------------ | -------------
`name` | string
`serverName` | string
`type` | string

## Example

```typescript
import type { MRBetaResponseToolChangeMCPToolReference } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "serverName": null,
  "type": null,
} satisfies MRBetaResponseToolChangeMCPToolReference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaResponseToolChangeMCPToolReference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


