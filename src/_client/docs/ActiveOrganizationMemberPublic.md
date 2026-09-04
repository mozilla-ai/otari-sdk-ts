
# ActiveOrganizationMemberPublic

A member row joined to the identity behind it, as the roster shows it.  Field-for-field the platform\'s shape, so the ported roster page is not rewritten around a new contract, with two consequences of the OSS line: ``email`` is nullable here (a local operator identity has no sign-in address), and ``invitation_id`` is always null until the invitation flow rehomes, which is what fills it.  ``attribution_user_id`` is the addition the platform has no counterpart for. Keys, budgets, and usage attach to the gateway\'s string-keyed ``users`` row, not to this UUID identity, so this carries the ``user_id`` a caller passes to ``POST /v1/keys`` to give this member a key. It is null when no usable row exists (nobody minted one, or it was soft-deleted through ``DELETE /v1/users``), which is the signal not to offer this member as a key owner: key creation would refuse. How the two ids converge is the open question in otari-ai#1727; this field is the join until it is answered, and is what lets either answer land without the dashboard changing.

## Properties

Name | Type
------------ | -------------
`attributionUserId` | string
`createdAt` | Date
`email` | string
`fullName` | string
`invitationId` | string
`organizationMemberId` | string
`role` | string
`status` | string
`updatedAt` | Date
`userId` | string

## Example

```typescript
import type { ActiveOrganizationMemberPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "attributionUserId": null,
  "createdAt": null,
  "email": null,
  "fullName": null,
  "invitationId": null,
  "organizationMemberId": null,
  "role": null,
  "status": null,
  "updatedAt": null,
  "userId": null,
} satisfies ActiveOrganizationMemberPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActiveOrganizationMemberPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


