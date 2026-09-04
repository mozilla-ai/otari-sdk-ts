
# AcceptInvitationResultPublic

What accepting produces: enough for the accept page to say where the visitor landed.  No session and no token: accepting resolves the membership to ``active`` and stops there. The identity it resolves to is password-less on the roster until it is claimed, so the next step is ``POST /v1/auth/signup`` on the invited address, not a sign-in.

## Properties

Name | Type
------------ | -------------
`organizationName` | string
`role` | string

## Example

```typescript
import type { AcceptInvitationResultPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "organizationName": null,
  "role": null,
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


