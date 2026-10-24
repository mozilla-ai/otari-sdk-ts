
# HostedProviderUpdateRequest

Rotate the key, repoint the base, or turn a provider off.  ``provider`` and ``name`` are immutable: changing either is a delete plus a create, because the key belongs to the provider it was issued by and requests address the name. Omitting ``api_key`` leaves the stored credential untouched, so a toggle never re-sends a secret the caller does not have; an explicit null removes it, where the provider can be served without one. ``client_args`` omitted is left alone; an explicit null clears it, and an entry echoed back as the mask keeps the stored value. ``restricted_to_organization_id`` reads the same way: omitted keeps the restriction, null lifts it.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`clientArgs` | { [key: string]: any; }
`enabled` | boolean
`restrictedToOrganizationId` | string
`servesUnlistedModels` | boolean

## Example

```typescript
import type { HostedProviderUpdateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "clientArgs": null,
  "enabled": null,
  "restrictedToOrganizationId": null,
  "servesUnlistedModels": null,
} satisfies HostedProviderUpdateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedProviderUpdateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


