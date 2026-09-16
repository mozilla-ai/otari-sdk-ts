
# PlaygroundMessagePublic

One stored turn, in the order it was saved.  No usage figures, matching what the save accepts: tokens, cost and timing describe the request that ran rather than the conversation, and a resumed transcript reporting an old request\'s latency as this session\'s would be lying. The billing record for that request is its ``usage_logs`` row.

## Properties

Name | Type
------------ | -------------
`content` | string
`reasoning` | string
`role` | string

## Example

```typescript
import type { PlaygroundMessagePublic } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "reasoning": null,
  "role": null,
} satisfies PlaygroundMessagePublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundMessagePublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


