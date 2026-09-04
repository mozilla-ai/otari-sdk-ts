
# WebAuthnCredentialUpdate

Renaming a passkey, which is the only thing about one that is editable.  Everything else on the row is what the authenticator asserted, so there is nothing else a person could correct.

## Properties

Name | Type
------------ | -------------
`name` | string

## Example

```typescript
import type { WebAuthnCredentialUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
} satisfies WebAuthnCredentialUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebAuthnCredentialUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


