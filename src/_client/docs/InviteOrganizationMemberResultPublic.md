
# InviteOrganizationMemberResultPublic

What issuing an invitation produces, and whether the email actually went out.

## Properties

Name | Type
------------ | -------------
`acceptLink` | string
`createdAt` | Date
`email` | string
`expiresAt` | Date
`invitationId` | string
`mailSent` | boolean
`organizationMemberId` | string
`role` | string
`status` | string

## Example

```typescript
import type { InviteOrganizationMemberResultPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "acceptLink": null,
  "createdAt": null,
  "email": null,
  "expiresAt": null,
  "invitationId": null,
  "mailSent": null,
  "organizationMemberId": null,
  "role": null,
  "status": null,
} satisfies InviteOrganizationMemberResultPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InviteOrganizationMemberResultPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


