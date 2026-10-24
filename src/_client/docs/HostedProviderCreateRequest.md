
# HostedProviderCreateRequest

Configure a provider this deployment will serve hosted inference on.  ``provider`` is the any-llm implementation. ``name`` is what requests address it by (``name:model``), defaulting to ``provider``; a name of its own lets two endpoints of one implementation coexist. ``api_key`` may be left out for a backend that needs none, or for an endpoint of its own (``api_base``), which is called with a placeholder key.  ``client_args`` is whatever the provider\'s SDK client needs beyond the key (Bedrock\'s region and IAM pair), the same shape an organization provider key takes. Values under credential-shaped names come back masked. ``restricted_to_organization_id`` keeps the provider to one organization; every other one is served as if it were not configured. ``serves_unlisted_models`` serves a model the roster does not list, as a ``config.yml`` instance does, and switches on every model it offers whether or not something prices it.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`clientArgs` | { [key: string]: any; }
`enabled` | boolean
`name` | string
`provider` | string
`restrictedToOrganizationId` | string
`servesUnlistedModels` | boolean

## Example

```typescript
import type { HostedProviderCreateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "clientArgs": null,
  "enabled": null,
  "name": null,
  "provider": null,
  "restrictedToOrganizationId": null,
  "servesUnlistedModels": null,
} satisfies HostedProviderCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedProviderCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


