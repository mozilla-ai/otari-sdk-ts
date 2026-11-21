
# HostedCatalogRefreshPublic

What a catalog sweep did, or would do.  ``removed`` is a sample and ``removed_count`` the total, so a deployment that has never been swept does not answer one button press with a few thousand strings. ``orphaned_rosters`` names the providers that still have a model list but nothing defining them, such as a removed ``config.yml`` entry: nothing serves them, and an apply deletes their model lists.

## Properties

Name | Type
------------ | -------------
`kept` | [Array&lt;HostedCatalogKeptGroupPublic&gt;](HostedCatalogKeptGroupPublic.md)
`orphanedRosters` | Array&lt;string&gt;
`providers` | [Array&lt;HostedCatalogProviderRefreshPublic&gt;](HostedCatalogProviderRefreshPublic.md)
`removed` | Array&lt;string&gt;
`removedCount` | number
`removedOverrideRows` | number
`removedPriceRows` | number

## Example

```typescript
import type { HostedCatalogRefreshPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "kept": null,
  "orphanedRosters": null,
  "providers": null,
  "removed": null,
  "removedCount": null,
  "removedOverrideRows": null,
  "removedPriceRows": null,
} satisfies HostedCatalogRefreshPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedCatalogRefreshPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


