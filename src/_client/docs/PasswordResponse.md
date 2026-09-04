
# PasswordResponse

What the identity signs in with now.

## Properties

Name | Type
------------ | -------------
`email` | string
`masterKeySignInRetired` | boolean

## Example

```typescript
import type { PasswordResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "masterKeySignInRetired": null,
} satisfies PasswordResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PasswordResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


