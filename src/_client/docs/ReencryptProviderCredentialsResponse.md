
# ReencryptProviderCredentialsResponse

Result of re-encrypting stored provider keys with the primary secret key.

## Properties

Name | Type
------------ | -------------
`reencrypted` | number
`unreadable` | number

## Example

```typescript
import type { ReencryptProviderCredentialsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "reencrypted": null,
  "unreadable": null,
} satisfies ReencryptProviderCredentialsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReencryptProviderCredentialsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


