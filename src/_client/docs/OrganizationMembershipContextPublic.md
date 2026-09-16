
# OrganizationMembershipContextPublic

An organization plus the caller\'s standing in it.  What every tenancy page reads first: which organization it is looking at, and what the caller may do there.

## Properties

Name | Type
------------ | -------------
`byoProviderKeysAllowed` | boolean
`caller` | [CallerIdentityPublic](CallerIdentityPublic.md)
`deploymentOperator` | boolean
`organization` | [OrganizationPublic](OrganizationPublic.md)
`organizationMemberId` | string
`providerKeyEncryptionAvailable` | boolean
`role` | string
`status` | string
`workspaceMemberships` | [Array&lt;CallerWorkspaceMembershipPublic&gt;](CallerWorkspaceMembershipPublic.md)

## Example

```typescript
import type { OrganizationMembershipContextPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "byoProviderKeysAllowed": null,
  "caller": null,
  "deploymentOperator": null,
  "organization": null,
  "organizationMemberId": null,
  "providerKeyEncryptionAvailable": null,
  "role": null,
  "status": null,
  "workspaceMemberships": null,
} satisfies OrganizationMembershipContextPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationMembershipContextPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


