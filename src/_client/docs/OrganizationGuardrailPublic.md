
# OrganizationGuardrailPublic

The API-facing shape. Never carries the credential, nor a credential-shaped parameter.  ``validate_kwargs`` is the second place a credential lives on this row, and the one with no column of its own: a guardrail class can take a vendor key as a parameter, so the form offers a box for it and whatever is typed there is stored as plain JSON. It is masked the way ``org_provider_keys.client_args`` is, by the *name* of the entry rather than by what the guardrail catalog says about it, so the mask still applies when the guardrails service is down and no catalog can be read.

## Properties

Name | Type
------------ | -------------
`appliesToAllWorkspaces` | boolean
`createdAt` | string
`enabled` | boolean
`hasCredential` | boolean
`id` | string
`mode` | string
`onUnavailable` | string
`organizationId` | string
`profile` | string
`updatedAt` | string
`url` | string
`validateKwargs` | { [key: string]: any; }
`workspaceIds` | Array&lt;string&gt;

## Example

```typescript
import type { OrganizationGuardrailPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "appliesToAllWorkspaces": null,
  "createdAt": null,
  "enabled": null,
  "hasCredential": null,
  "id": null,
  "mode": null,
  "onUnavailable": null,
  "organizationId": null,
  "profile": null,
  "updatedAt": null,
  "url": null,
  "validateKwargs": null,
  "workspaceIds": null,
} satisfies OrganizationGuardrailPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationGuardrailPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


