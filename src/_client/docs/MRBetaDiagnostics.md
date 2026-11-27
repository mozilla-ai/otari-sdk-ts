
# MRBetaDiagnostics

Request-level diagnostics: why the prompt cache could not fully reuse the prefix of the request named by `diagnostics.previous_message_id`.

## Properties

Name | Type
------------ | -------------
`cacheMissReason` | [CacheMissReason](CacheMissReason.md)

## Example

```typescript
import type { MRBetaDiagnostics } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheMissReason": null,
} satisfies MRBetaDiagnostics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaDiagnostics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


