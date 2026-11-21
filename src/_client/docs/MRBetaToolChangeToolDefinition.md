
# MRBetaToolChangeToolDefinition

A tool defined by value, as a `compaction` block\'s `tool_changes` entry reports it: `definition` is the tool\'s definition as it was sent, in the form of a `tools` entry, without `cache_control`. Send it back unchanged with the block.

## Properties

Name | Type
------------ | -------------
`definition` | [Definition](Definition.md)
`type` | string

## Example

```typescript
import type { MRBetaToolChangeToolDefinition } from ''

// TODO: Update the object below with actual values
const example = {
  "definition": null,
  "type": null,
} satisfies MRBetaToolChangeToolDefinition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaToolChangeToolDefinition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


