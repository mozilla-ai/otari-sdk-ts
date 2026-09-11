
# CallerOrganizationMembershipPublic

One organization the caller belongs to, and their standing in it.  What an organization switcher renders. Deliberately not ``OrganizationMembershipContextPublic``: that one answers \"the organization this request is acting in\" and carries the caller\'s workspaces in it, which for an organization they are not currently in would be a second read per row.

## Properties

Name | Type
------------ | -------------
`isActiveOrganization` | boolean
`organization` | [OrganizationPublic](OrganizationPublic.md)
`organizationMemberId` | string
`role` | string
`status` | string

## Example

```typescript
import type { CallerOrganizationMembershipPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "isActiveOrganization": null,
  "organization": null,
  "organizationMemberId": null,
  "role": null,
  "status": null,
} satisfies CallerOrganizationMembershipPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CallerOrganizationMembershipPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


