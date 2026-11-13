
# MRBetaResponseToolChangeToolReference

Reference to a single tool, by the name the model uses to call it, as a ``compaction`` block\'s ``tool_changes`` entry reports it: a tool declared in ``tools`` or defined by an earlier ``tool_addition`` block. Send it back unchanged with the block.

## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string

## Example

```typescript
import type { MRBetaResponseToolChangeToolReference } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "type": null,
} satisfies MRBetaResponseToolChangeToolReference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaResponseToolChangeToolReference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


