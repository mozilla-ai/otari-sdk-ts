
# OrganizationDomainPublic

A claim as its organization\'s admins see it.  Carries ``verification_record`` (the whole string to publish) rather than the raw token: the admin never has a use for the token on its own, and one field that can be copied verbatim into a DNS panel is harder to get wrong than a prefix they must remember to prepend.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`defaultRole` | string
`domain` | string
`enabled` | boolean
`id` | string
`organizationId` | string
`proofExpiresAt` | Date
`updatedAt` | Date
`verificationRecord` | string
`verifiedAt` | Date

## Example

```typescript
import type { OrganizationDomainPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "defaultRole": null,
  "domain": null,
  "enabled": null,
  "id": null,
  "organizationId": null,
  "proofExpiresAt": null,
  "updatedAt": null,
  "verificationRecord": null,
  "verifiedAt": null,
} satisfies OrganizationDomainPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationDomainPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


