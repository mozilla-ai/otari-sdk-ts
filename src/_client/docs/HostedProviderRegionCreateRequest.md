
# HostedProviderRegionCreateRequest

Add a region a hosted provider serves from.  Only what differs from the provider is given; every field left out is the provider\'s. ``slug`` pins the region in a selector (``<provider>@<slug>:<model>``) and names it in every route. ``api_key`` left out uses the provider\'s key, which a region on another origin than the provider\'s endpoint may not: it needs a key of its own there. ``client_args`` are merged over the provider\'s on the provider\'s origin, so a Bedrock region gives its ``region_name`` alone; a region on another origin takes its own alone. An ``api_base`` that carries a key must be https. ``data_location`` declares where the region keeps request data. Left out, it copies the provider\'s declaration as it stands; null declares nothing. It is the region\'s own from then on: a later change to the provider\'s does not move it.  A request is served by the first enabled region whose countries admit it and whose data location the workspace accepts; a pinned region is held to the same filters. A provider with no regions yet serves from its own connection. Adding its first region keeps that connection as a region of its own, ahead of the new one, under ``primary_slug`` and ``primary_label``: by default the provider\'s data location, or ``primary``.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`clientArgs` | { [key: string]: any; }
`dataLocation` | string
`enabled` | boolean
`label` | string
`primaryLabel` | string
`primarySlug` | string
`slug` | string
`supportedCountries` | Array&lt;string&gt;

## Example

```typescript
import type { HostedProviderRegionCreateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "clientArgs": null,
  "dataLocation": null,
  "enabled": null,
  "label": null,
  "primaryLabel": null,
  "primarySlug": null,
  "slug": null,
  "supportedCountries": null,
} satisfies HostedProviderRegionCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedProviderRegionCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


