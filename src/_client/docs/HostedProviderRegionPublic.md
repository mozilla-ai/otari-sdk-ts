
# HostedProviderRegionPublic

One region of a hosted provider, as stored: null wherever it uses the provider\'s value.  ``data_location`` is the exception: it is the region\'s own, and null there means nothing is declared.  ``selector`` is what pins it in a request (``tokenhub@sg``). ``has_api_key`` is true for a region with a key of its own, known by its last four characters; ``client_args`` holds only the region\'s own extras, masked as the provider\'s are. ``decryptable`` is false for a region whose own key or extras no configured ``OTARI_SECRET_KEY`` reads, which serves nothing until re-entered.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKeyLast4` | string
`clientArgs` | { [key: string]: any; }
`createdAt` | Date
`dataLocation` | string
`decryptable` | boolean
`enabled` | boolean
`hasApiKey` | boolean
`label` | string
`position` | number
`selector` | string
`slug` | string
`supportedCountries` | Array&lt;string&gt;
`updatedAt` | Date

## Example

```typescript
import type { HostedProviderRegionPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKeyLast4": null,
  "clientArgs": null,
  "createdAt": null,
  "dataLocation": null,
  "decryptable": null,
  "enabled": null,
  "hasApiKey": null,
  "label": null,
  "position": null,
  "selector": null,
  "slug": null,
  "supportedCountries": null,
  "updatedAt": null,
} satisfies HostedProviderRegionPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedProviderRegionPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


