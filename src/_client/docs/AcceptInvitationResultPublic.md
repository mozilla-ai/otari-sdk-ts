
# AcceptInvitationResultPublic

What accepting produces: enough for the accept page to say where the visitor landed.  No session and no token. When the request carried a password, the identity can sign in straight away; otherwise it stays password-less until claimed by signup or a provider sign-in.

## Properties

Name | Type
------------ | -------------
`canSignIn` | boolean
`organizationName` | string
`passwordSet` | boolean
`role` | string
`verificationPending` | boolean
`waysIn` | Array&lt;string&gt;

## Example

```typescript
import type { AcceptInvitationResultPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "canSignIn": null,
  "organizationName": null,
  "passwordSet": null,
  "role": null,
  "verificationPending": null,
  "waysIn": null,
} satisfies AcceptInvitationResultPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AcceptInvitationResultPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


