
# HostedProviderRegionUpdateRequest

Change one region. A field left out is left alone.  Null puts a field the region inherits back on the provider\'s value: ``api_key`` null returns the region to the provider\'s key, an empty ``api_base`` or null to the provider\'s endpoint, and so on for ``client_args`` and ``supported_countries``. ``data_location`` is the region\'s own, so null declares nothing. Null on ``label``, ``enabled`` or ``position`` changes nothing. ``client_args`` echoed back with masked entries keeps the stored values. ``position`` moves the region to that place in the order regions are tried, counted from 0.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`clientArgs` | { [key: string]: any; }
`dataLocation` | string
`enabled` | boolean
`label` | string
`position` | number
`supportedCountries` | Array&lt;string&gt;

## Example

```typescript
import type { HostedProviderRegionUpdateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "clientArgs": null,
  "dataLocation": null,
  "enabled": null,
  "label": null,
  "position": null,
  "supportedCountries": null,
} satisfies HostedProviderRegionUpdateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedProviderRegionUpdateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


