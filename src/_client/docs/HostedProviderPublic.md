
# HostedProviderPublic

One hosted provider, known by its name, its implementation and the tail of its key.  No shape in this section carries key material: a stored credential is known by its last four characters and nothing else, ``client_args`` goes out with credential-shaped values masked, and ``api_base`` with the password in its userinfo and its query values masked.  ``name`` is what requests address and every route takes; ``provider`` is the any-llm implementation. ``source`` says where the provider is defined. A ``config`` provider comes from the ``hosted_providers:`` block, has no row and so no ``id`` or timestamps, and is changed by editing the configuration rather than through this API; its models are administered as a stored provider\'s are. ``shadows_config`` marks a stored provider that wins over a configuration entry of the same name, which serves again once the row is deleted. ``has_api_key`` is false for one stored without a key, and ``decryptable`` false for one whose key or extras no configured ``OTARI_SECRET_KEY`` reads, which serves nothing until re-entered. ``serves_unlisted_models`` is true for one that serves a model its roster does not list.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKeyLast4` | string
`clientArgs` | { [key: string]: any; }
`createdAt` | Date
`decryptable` | boolean
`enabled` | boolean
`hasApiKey` | boolean
`id` | string
`name` | string
`provider` | string
`restrictedToOrganizationId` | string
`servesUnlistedModels` | boolean
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
  "decryptable": null,
  "enabled": null,
  "hasApiKey": null,
  "id": null,
  "name": null,
  "provider": null,
  "restrictedToOrganizationId": null,
  "servesUnlistedModels": null,
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


