
# HostedProviderPublic

One hosted provider, named by its provider and the tail of its key.  No shape in this section carries key material: a stored credential is known by its last four characters and nothing else, ``client_args`` goes out with credential-shaped values masked, and ``api_base`` with the password in its userinfo and its query values masked.  ``source`` says where the provider is defined. A ``config`` provider comes from the ``hosted_providers:`` block, has no row and so no ``id`` or timestamps, and is changed by editing the configuration rather than through this API; its models are administered as a stored provider\'s are. ``shadows_config`` marks a stored provider that wins over a configuration entry of the same provider, which serves again once the row is deleted.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKeyLast4` | string
`clientArgs` | { [key: string]: any; }
`createdAt` | Date
`enabled` | boolean
`id` | string
`provider` | string
`restrictedToOrganizationId` | string
`shadowsConfig` | boolean
`source` | string
`updatedAt` | Date

## Example

```typescript
import type { HostedProviderPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKeyLast4": null,
  "clientArgs": null,
  "createdAt": null,
  "enabled": null,
  "id": null,
  "provider": null,
  "restrictedToOrganizationId": null,
  "shadowsConfig": null,
  "source": null,
  "updatedAt": null,
} satisfies HostedProviderPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedProviderPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


