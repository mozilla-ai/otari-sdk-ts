
# MRBetaCacheMissMessagesChanged

A `cache_miss_reason` for a request whose `messages` differ from the previous request\'s in an earlier entry, instead of only having entries appended. The `model`, `system`, and `tools` match.  See the [cache diagnostics guide](https://platform.claude.com/docs/en/build-with-claude/cache-diagnostics#cache-miss-reason-types) to learn what to change for each reason.

## Properties

Name | Type
------------ | -------------
`cacheMissedInputTokens` | number
`type` | string

## Example

```typescript
import type { MRBetaCacheMissMessagesChanged } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheMissedInputTokens": null,
  "type": null,
} satisfies MRBetaCacheMissMessagesChanged

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaCacheMissMessagesChanged
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


