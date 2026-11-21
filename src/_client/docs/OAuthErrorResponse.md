
# OAuthErrorResponse

A refused token request, as RFC 6749 section 5.2 shapes it.

## Properties

Name | Type
------------ | -------------
`error` | string
`errorDescription` | string

## Example

```typescript
import type { OAuthErrorResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "error": null,
  "errorDescription": null,
} satisfies OAuthErrorResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthErrorResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


