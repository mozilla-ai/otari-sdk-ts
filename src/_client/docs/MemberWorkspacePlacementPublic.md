
# MemberWorkspacePlacementPublic

One workspace a member is in, with their role and ceiling there.  A ceiling is keyed on the *membership*, not on the person, so a member of two workspaces has two of them. The membership id is carried in its own right rather than read back off the ceiling, because it is needed precisely when there is no ceiling yet and one is about to be created.

## Properties

Name | Type
------------ | -------------
`ceiling` | [MemberCeilingPublic](MemberCeilingPublic.md)
`role` | string
`workspaceId` | string
`workspaceMemberId` | string
`workspaceName` | string

## Example

```typescript
import type { MemberWorkspacePlacementPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "ceiling": null,
  "role": null,
  "workspaceId": null,
  "workspaceMemberId": null,
  "workspaceName": null,
} satisfies MemberWorkspacePlacementPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MemberWorkspacePlacementPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


