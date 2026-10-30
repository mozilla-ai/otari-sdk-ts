
# AnthropicErrorResponse

Anthropic\'s error envelope, which every error on a Messages route is answered in.

## Properties

Name | Type
------------ | -------------
`code` | string
`error` | [AnthropicError](AnthropicError.md)
`type` | string

## Example

```typescript
import type { AnthropicErrorResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "error": null,
  "type": null,
} satisfies AnthropicErrorResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnthropicErrorResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


