
# PasswordLinkPublic

A single-use link that sets an account\'s password, and whether it was mailed.

## Properties

Name | Type
------------ | -------------
`expiresAt` | Date
`link` | string
`mailSent` | boolean

## Example

```typescript
import type { PasswordLinkPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "expiresAt": null,
  "link": null,
  "mailSent": null,
} satisfies PasswordLinkPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PasswordLinkPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


