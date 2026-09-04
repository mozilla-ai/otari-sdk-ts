
# InviteOrganizationMemberRequest

Invite an address to the caller\'s organization, optionally into workspaces at once.  Field-for-field ``ActiveOrganizationMemberCreateRequest``\'s twin: the two requests ask for the same thing and differ only in what creating one produces (this lands ``invited`` and emails a link; that lands ``active`` immediately).

## Properties

Name | Type
------------ | -------------
`email` | string
`role` | string
`workspaceAssignments` | [Array&lt;WorkspaceAssignmentRequest&gt;](WorkspaceAssignmentRequest.md)

## Example

```typescript
import type { InviteOrganizationMemberRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "role": null,
  "workspaceAssignments": null,
} satisfies InviteOrganizationMemberRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InviteOrganizationMemberRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


