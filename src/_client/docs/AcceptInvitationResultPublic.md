
# AcceptInvitationResultPublic

What accepting through the link produced, and what it leaves the invitee to do.  No session and no token: ``next_step`` is the whole of what comes next.

## Properties

Name | Type
------------ | -------------
`nextStep` | [InvitationNextStep](InvitationNextStep.md)
`organizationName` | string
`role` | string
`waysIn` | Array&lt;string&gt;

## Example

```typescript
import type { AcceptInvitationResultPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "nextStep": null,
  "organizationName": null,
  "role": null,
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


