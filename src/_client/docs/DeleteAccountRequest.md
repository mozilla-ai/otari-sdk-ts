
# DeleteAccountRequest

The confirmation an account deletion needs.

## Properties

Name | Type
------------ | -------------
`confirmEmail` | string
`currentPassword` | string

## Example

```typescript
import type { DeleteAccountRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "confirmEmail": null,
  "currentPassword": null,
} satisfies DeleteAccountRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeleteAccountRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


