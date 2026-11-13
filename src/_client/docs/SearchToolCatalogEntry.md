
# SearchToolCatalogEntry

One search tool a direct search may name, as any caller may see it: never its key, endpoint or options.

## Properties

Name | Type
------------ | -------------
`_default` | boolean
`id` | string
`label` | string
`object` | string
`pricePerCall` | number
`provider` | string

## Example

```typescript
import type { SearchToolCatalogEntry } from ''

// TODO: Update the object below with actual values
const example = {
  "_default": null,
  "id": null,
  "label": null,
  "object": null,
  "pricePerCall": null,
  "provider": null,
} satisfies SearchToolCatalogEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchToolCatalogEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


