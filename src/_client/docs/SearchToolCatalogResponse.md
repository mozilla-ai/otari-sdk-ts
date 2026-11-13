
# SearchToolCatalogResponse

The search tools a direct search may name.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;SearchToolCatalogEntry&gt;](SearchToolCatalogEntry.md)
`object` | string

## Example

```typescript
import type { SearchToolCatalogResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "object": null,
} satisfies SearchToolCatalogResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchToolCatalogResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


