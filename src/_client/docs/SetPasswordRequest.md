
# SetPasswordRequest

Set or change the signed-in identity\'s password.  The example is the first-boot claim, because that is the call an operator makes first and the one whose required fields are not obvious from the schema: ``email`` is optional here in general and *required* when the identity has no address yet. Without it the generated Postman body carries only ``new_password``, which is the one shape that cannot complete the flow the docs walk through.

## Properties

Name | Type
------------ | -------------
`currentPassword` | string
`email` | string
`newPassword` | string

## Example

```typescript
import type { SetPasswordRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "currentPassword": null,
  "email": null,
  "newPassword": null,
} satisfies SetPasswordRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetPasswordRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


