
# CountTokensResponse

Anthropic ``/v1/messages/count_tokens`` response.

## Properties

Name | Type
------------ | -------------
`inputTokens` | number

## Example

```typescript
import type { CountTokensResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "inputTokens": null,
} satisfies CountTokensResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CountTokensResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


