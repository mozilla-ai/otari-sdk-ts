
# HostedCatalogUpdatePreviewPublic

What a catalog update would do: its price changes, then what each provider newly lists.  ``prices`` is ``None`` when models.dev changed nothing, or when it could not be fetched, which ``price_error`` then says. ``catalog`` carries the cleanup the preview was asked for, and no removals otherwise.

## Properties

Name | Type
------------ | -------------
`catalog` | [HostedCatalogRefreshPublic](HostedCatalogRefreshPublic.md)
`priceError` | string
`prices` | [HostedCatalogPriceUpdatePublic](HostedCatalogPriceUpdatePublic.md)

## Example

```typescript
import type { HostedCatalogUpdatePreviewPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "catalog": null,
  "priceError": null,
  "prices": null,
} satisfies HostedCatalogUpdatePreviewPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedCatalogUpdatePreviewPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


