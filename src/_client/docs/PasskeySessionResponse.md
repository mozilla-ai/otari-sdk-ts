
# PasskeySessionResponse

A dashboard session minted by a passkey (the token travels only in the cookie).  The same three fields ``POST /v1/auth/session`` answers, deliberately: the dashboard\'s sign-in path does not care which credential got it here.

## Properties

Name | Type
------------ | -------------
`activeOrganizationId` | string
`expiresAt` | Date
`userId` | string

## Example

```typescript
import type { PasskeySessionResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "activeOrganizationId": null,
  "expiresAt": null,
  "userId": null,
} satisfies PasskeySessionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PasskeySessionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


