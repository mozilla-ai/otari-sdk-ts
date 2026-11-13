
# BulkInviteOrganizationMembersResultPublic

What a bulk invite produced: one entry per submitted address, repeats included, in one of the two lists.

## Properties

Name | Type
------------ | -------------
`failed` | [Array&lt;BulkInvitationFailurePublic&gt;](BulkInvitationFailurePublic.md)
`invited` | [Array&lt;InviteOrganizationMemberResultPublic&gt;](InviteOrganizationMemberResultPublic.md)

## Example

```typescript
import type { BulkInviteOrganizationMembersResultPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "failed": null,
  "invited": null,
} satisfies BulkInviteOrganizationMembersResultPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkInviteOrganizationMembersResultPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


