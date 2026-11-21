
# MRBetaCacheMissPreviousMessageNotFound

A `cache_miss_reason` for when the API doesn\'t have a stored record of the request that `diagnostics.previous_message_id` references.  This doesn\'t mean that this request changed.  See the [cache diagnostics guide](https://platform.claude.com/docs/en/build-with-claude/cache-diagnostics#cache-miss-reason-types) to learn what to change for each reason.

## Properties

Name | Type
------------ | -------------
`type` | string

## Example

```typescript
import type { MRBetaCacheMissPreviousMessageNotFound } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
} satisfies MRBetaCacheMissPreviousMessageNotFound

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaCacheMissPreviousMessageNotFound
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


