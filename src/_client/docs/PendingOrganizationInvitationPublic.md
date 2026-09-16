
# PendingOrganizationInvitationPublic

One invitation waiting on the caller, as their own inbox lists it.  The authenticated counterpart to ``InvitationPreviewPublic``, and wider than it on purpose: that one answers a visitor whose only credential is the token, so it carries nothing it does not strictly need, while this one answers the addressee\'s own session and can name the ids its accept and decline calls take.  ``organization_member_id`` is what those two calls address, not ``invitation_id``: the membership is the row that outlives a revoke and a re-invite (each round mints a fresh ``Invitation`` against the same membership), so a client holding a list from a moment ago names something still resolvable rather than a token-shaped id that has since been superseded. ``invitation_id`` rides along for the roster\'s sake, since ``ActiveOrganizationMemberPublic`` carries the same field.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`email` | string
`expiresAt` | Date
`invitationId` | string
`organizationId` | string
`organizationMemberId` | string
`organizationName` | string
`role` | string

## Example

```typescript
import type { PendingOrganizationInvitationPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "email": null,
  "expiresAt": null,
  "invitationId": null,
  "organizationId": null,
  "organizationMemberId": null,
  "organizationName": null,
  "role": null,
} satisfies PendingOrganizationInvitationPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PendingOrganizationInvitationPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


