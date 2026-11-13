
# MRBetaResponseToolAdditionBlock

An entry of a `compaction` block\'s `tool_changes`: a tool the compacted range made available, as a reference to a `tools` entry or MCP toolset, or as the tool definition in effect at the end of the range, by value. Send it back unchanged.

## Properties

Name | Type
------------ | -------------
`tool` | [Tool](Tool.md)
`type` | string

## Example

```typescript
import type { MRBetaResponseToolAdditionBlock } from ''

// TODO: Update the object below with actual values
const example = {
  "tool": null,
  "type": null,
} satisfies MRBetaResponseToolAdditionBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaResponseToolAdditionBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


