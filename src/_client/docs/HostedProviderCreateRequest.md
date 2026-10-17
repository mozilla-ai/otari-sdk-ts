
# HostedProviderCreateRequest

Configure a provider this deployment will serve hosted inference on.  ``client_args`` is whatever the provider\'s SDK client needs beyond the key (Bedrock\'s region and IAM pair), the same shape an organization provider key takes. Values under credential-shaped names come back masked. ``restricted_to_organization_id`` keeps the provider to one organization; every other one is served as if it were not configured.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`clientArgs` | { [key: string]: any; }
`enabled` | boolean
`provider` | string
`restrictedToOrganizationId` | string

## Example

```typescript
import type { HostedProviderCreateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "clientArgs": null,
  "enabled": null,
  "provider": null,
  "restrictedToOrganizationId": null,
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


