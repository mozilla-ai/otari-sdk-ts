
# MRBetaCompactionBlock

A compaction block returned when autocompact is triggered.  When content is None, it indicates the compaction failed to produce a valid summary (e.g., malformed output from the model). Clients may round-trip compaction blocks with null content; the server treats them as no-ops.

## Properties

Name | Type
------------ | -------------
`content` | string
`type` | string

## Example

```typescript
import type { MRBetaCompactionBlock } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "type": null,
} satisfies MRBetaCompactionBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaCompactionBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


