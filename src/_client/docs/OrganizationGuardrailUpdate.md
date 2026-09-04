
# OrganizationGuardrailUpdate

Partial update. Only the fields the caller sets are applied.  ``credential`` and ``url`` have three states rather than two, which is what a write-only field and its nullable partner need: omit to leave the stored value alone, send ``\"\"`` to clear it, send a value to replace it. An explicit ``null`` also leaves them alone, matching `WorkspaceMcpServerUpdate`: a client that serializes its whole form back, with an empty credential box it never filled in, must not destroy a credential it was never shown.  ``workspace_ids`` replaces the scope whole when sent; ``[]`` clears it.

## Properties

Name | Type
------------ | -------------
`appliesToAllWorkspaces` | boolean
`credential` | string
`enabled` | boolean
`mode` | string
`onUnavailable` | string
`profile` | string
`url` | string
`validateKwargs` | { [key: string]: any; }
`workspaceIds` | Array&lt;string&gt;

## Example

```typescript
import type { OrganizationGuardrailUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "appliesToAllWorkspaces": null,
  "credential": null,
  "enabled": null,
  "mode": null,
  "onUnavailable": null,
  "profile": null,
  "url": null,
  "validateKwargs": null,
  "workspaceIds": null,
} satisfies OrganizationGuardrailUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationGuardrailUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


