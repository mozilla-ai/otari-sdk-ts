
# MRBetaResponseToolRemovalBlock

An entry of a `compaction` block\'s `tool_changes`: a tool of the request\'s `tools` (or an MCP tool or toolset) that the compacted range withdrew. Send it back unchanged.

## Properties

Name | Type
------------ | -------------
`tool` | [Tool1](Tool1.md)
`type` | string

## Example

```typescript
import type { MRBetaResponseToolRemovalBlock } from ''

// TODO: Update the object below with actual values
const example = {
  "tool": null,
  "type": null,
} satisfies MRBetaResponseToolRemovalBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaResponseToolRemovalBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


