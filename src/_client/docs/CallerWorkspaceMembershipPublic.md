
# CallerWorkspaceMembershipPublic

One workspace the caller belongs to, and their role in it.  Carried on the membership context so the shell can populate its workspace switcher and choose a default from the first authenticated call, rather than listing workspaces and then asking for the caller\'s role in each. Only the caller\'s own memberships appear, so this is not a directory of the organization\'s workspaces: an admin sees the ones they joined, and the workspace list endpoint remains the way to see the rest.

## Properties

Name | Type
------------ | -------------
`name` | string
`role` | string
`workspaceId` | string

## Example

```typescript
import type { CallerWorkspaceMembershipPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "role": null,
  "workspaceId": null,
} satisfies CallerWorkspaceMembershipPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CallerWorkspaceMembershipPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


