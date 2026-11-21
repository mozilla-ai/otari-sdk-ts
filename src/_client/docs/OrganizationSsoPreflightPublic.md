
# OrganizationSsoPreflightPublic

What requiring sign-in through the caller\'s organization\'s own connection would cost today.  ``affected_count`` is exact: every active member holding no sign-in link to this connection, who would get a new account the first time they use it. ``affected_members`` samples those people, bounded in size; ``affected_members_truncated`` says whether the sample leaves any out.  ``break_glass_candidates`` is who may be named as the exception, so naming one of them is never refused. It leaves out the deployment\'s own operator, who is never subject to enforcement and so needs no exception.

## Properties

Name | Type
------------ | -------------
`affectedCount` | number
`affectedMembers` | [Array&lt;OrganizationSsoPreflightMemberPublic&gt;](OrganizationSsoPreflightMemberPublic.md)
`affectedMembersTruncated` | boolean
`breakGlassCandidates` | [Array&lt;OrganizationSsoPreflightMemberPublic&gt;](OrganizationSsoPreflightMemberPublic.md)
`totalMembers` | number

## Example

```typescript
import type { OrganizationSsoPreflightPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "affectedCount": null,
  "affectedMembers": null,
  "affectedMembersTruncated": null,
  "breakGlassCandidates": null,
  "totalMembers": null,
} satisfies OrganizationSsoPreflightPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationSsoPreflightPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


