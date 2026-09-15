
# OrganizationGuardrailCreate

Request body for mandating a guardrail across an organization.  ``credential`` is never stored as sent: it is encrypted with ``OTARI_SECRET_KEY`` and only the ciphertext is kept, the same convention `entities.WorkspaceMcpServer` and `entities.ProviderCredential` use. It is sent to the endpoint as ``Authorization: Bearer`` when the guardrail runs, so it authenticates this gateway to the guardrails service the entry names. A guardrail *vendor\'s* own key is not this: the guardrails service builds its guardrails from the operator\'s YAML and holds those itself.  A credential therefore requires ``url``. The deployment\'s ``guardrails_url`` is not necessarily encrypted (the shipped compose file makes it a same-host ``http://`` sidecar) and this row cannot see what it is set to, so an entry that fell back to it could not promise the bearer was sent over https. See `_require_url_for_credential`.  ``on`` is not offered. This plane mandates input-direction checks, which is the only direction the request path enforces (`services.guardrails.run_input_guardrails`); an organization that could store an output-direction mandate would be storing one nothing runs.

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
import type { OrganizationGuardrailCreate } from ''

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
} satisfies OrganizationGuardrailCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationGuardrailCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


