
# HostedCatalogProviderRefreshPublic

What one hosted provider newly lists, as a catalog sweep found it.  Per provider rather than one total, because a dial that failed is a fact about that provider, and the operator has to be told which one went quiet rather than read a smaller number than they expected.

## Properties

Name | Type
------------ | -------------
`added` | Array&lt;string&gt;
`credentialUnreadable` | boolean
`discoveryUnsupported` | boolean
`error` | string
`provider` | string
`repriced` | Array&lt;string&gt;
`source` | string

## Example

```typescript
import type { HostedCatalogProviderRefreshPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "added": null,
  "credentialUnreadable": null,
  "discoveryUnsupported": null,
  "error": null,
  "provider": null,
  "repriced": null,
  "source": null,
} satisfies HostedCatalogProviderRefreshPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedCatalogProviderRefreshPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


