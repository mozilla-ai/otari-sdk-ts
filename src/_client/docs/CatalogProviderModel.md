
# CatalogProviderModel

One catalog model as one provider instance offers it.

## Properties

Name | Type
------------ | -------------
`contextLength` | number
`id` | string
`inputPrice` | number
`name` | string
`outputPrice` | number
`priceUnit` | string
`vendor` | string

## Example

```typescript
import type { CatalogProviderModel } from ''

// TODO: Update the object below with actual values
const example = {
  "contextLength": null,
  "id": null,
  "inputPrice": null,
  "name": null,
  "outputPrice": null,
  "priceUnit": null,
  "vendor": null,
} satisfies CatalogProviderModel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogProviderModel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


