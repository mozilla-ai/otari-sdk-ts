
# OrgWebSearchKeyCreateRequest

What a caller sends to add a key. The service keeps only its ciphertext and ``last4``.

## Properties

Name | Type
------------ | -------------
`apiKey` | string
`name` | string
`provider` | string

## Example

```typescript
import type { OrgWebSearchKeyCreateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiKey": null,
  "name": null,
  "provider": null,
} satisfies OrgWebSearchKeyCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrgWebSearchKeyCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


