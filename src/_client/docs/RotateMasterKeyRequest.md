
# RotateMasterKeyRequest

The proof a session-authenticated master-key rotation has to supply.  Only read when the caller authenticated with the dashboard session cookie. A request carrying the master key is the deployment credential already, so it needs no further proof.

## Properties

Name | Type
------------ | -------------
`currentPassword` | string

## Example

```typescript
import type { RotateMasterKeyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "currentPassword": null,
} satisfies RotateMasterKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RotateMasterKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


