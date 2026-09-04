
# OrgProviderKeyCreateRequest

What a caller sends to create a key.  The plaintext key is never stored as sent: the service encrypts it (`services/secret_box.py`) and keeps only the ciphertext and ``last4``, the same convention `entities.ProviderCredential` already uses.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`clientArgs` | { [key: string]: any; }
`name` | string
`provider` | string

## Example

```typescript
import type { OrgProviderKeyCreateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "clientArgs": null,
  "name": null,
  "provider": null,
} satisfies OrgProviderKeyCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrgProviderKeyCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


