
# SubagentUsageLine

What a subagent consumed on one model, as its harness counted it.  The cache counts are beside `input_tokens`, not inside it.

## Properties

Name | Type
------------ | -------------
`cacheReadTokens` | number
`cacheWriteTokens` | number
`inputTokens` | number
`model` | string
`outputTokens` | number

## Example

```typescript
import type { SubagentUsageLine } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadTokens": null,
  "cacheWriteTokens": null,
  "inputTokens": null,
  "model": null,
  "outputTokens": null,
} satisfies SubagentUsageLine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubagentUsageLine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


