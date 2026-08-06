
# DroppedResponse

A candidate that was filtered out, and why.

## Properties

Name | Type
------------ | -------------
`detail` | string
`reason` | string
`selector` | string

## Example

```typescript
import type { DroppedResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "detail": null,
  "reason": null,
  "selector": null,
} satisfies DroppedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DroppedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


