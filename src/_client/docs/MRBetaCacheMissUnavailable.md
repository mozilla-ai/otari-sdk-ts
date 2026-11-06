
# MRBetaCacheMissUnavailable

A `cache_miss_reason` for when the API can\'t give a diagnosis.  The request itself was processed normally.  This includes a request whose `model`, `system`, and `tools` match the previous request\'s but whose other prompt-affecting parameters, such as `thinking` or `tool_choice`, differ.  See the [cache diagnostics guide](https://platform.claude.com/docs/en/build-with-claude/cache-diagnostics#cache-miss-reason-types) to learn what to change for each reason.

## Properties

Name | Type
------------ | -------------
`type` | string

## Example

```typescript
import type { MRBetaCacheMissUnavailable } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
} satisfies MRBetaCacheMissUnavailable

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaCacheMissUnavailable
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


