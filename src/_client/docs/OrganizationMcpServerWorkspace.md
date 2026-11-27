
# OrganizationMcpServerWorkspace

One workspace of the organization, as one of its servers reaches it.

## Properties

Name | Type
------------ | -------------
`name` | string
`narrowed` | boolean
`organizationTools` | Array&lt;string&gt;
`reached` | boolean
`workspaceEnabled` | boolean
`workspaceId` | string

## Example

```typescript
import type { OrganizationMcpServerWorkspace } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "narrowed": null,
  "organizationTools": null,
  "reached": null,
  "workspaceEnabled": null,
  "workspaceId": null,
} satisfies OrganizationMcpServerWorkspace

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationMcpServerWorkspace
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


