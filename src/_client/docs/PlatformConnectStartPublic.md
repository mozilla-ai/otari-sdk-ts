
# PlatformConnectStartPublic

What an operator needs to approve a connection on otari.ai.  ``user_code`` is what the approval page shows back, ``verification_uri_complete`` the page to open, and ``expires_in`` the seconds left to approve.

## Properties

Name | Type
------------ | -------------
`expiresIn` | number
`userCode` | string
`verificationUriComplete` | string

## Example

```typescript
import type { PlatformConnectStartPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "expiresIn": null,
  "userCode": null,
  "verificationUriComplete": null,
} satisfies PlatformConnectStartPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlatformConnectStartPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


