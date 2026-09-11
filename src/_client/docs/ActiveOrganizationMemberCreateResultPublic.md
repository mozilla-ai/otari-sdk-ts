
# ActiveOrganizationMemberCreateResultPublic

The outcome of adding a member.  The platform answers ``invited`` on both its branches, because being added there always needs acceptance: a known address gets an ``invited`` membership, an unknown one an emailed invitation. This edition has neither an invitation to send nor a way to accept one, so it answers on the other arm of the same union, ``active``, and the invitation fields stay null until that flow rehomes.

## Properties

Name | Type
------------ | -------------
`attributionUserId` | string
`createdAt` | Date
`email` | string
`expiresAt` | Date
`fullName` | string
`invitationId` | string
`organizationMemberId` | string
`role` | string
`status` | string
`updatedAt` | Date
`userId` | string

## Example

```typescript
import type { ActiveOrganizationMemberCreateResultPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "attributionUserId": null,
  "createdAt": null,
  "email": null,
  "expiresAt": null,
  "fullName": null,
  "invitationId": null,
  "organizationMemberId": null,
  "role": null,
  "status": null,
  "updatedAt": null,
  "userId": null,
} satisfies ActiveOrganizationMemberCreateResultPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActiveOrganizationMemberCreateResultPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


