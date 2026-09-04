
# SearchToolsResponse

Every search tool ``POST /v1/search`` can name, by where it came from.

## Properties

Name | Type
------------ | -------------
`config` | [Array&lt;ConfigSearchToolSchema&gt;](ConfigSearchToolSchema.md)
`stored` | [Array&lt;StoredSearchToolSchema&gt;](StoredSearchToolSchema.md)

## Example

```typescript
import type { SearchToolsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "config": null,
  "stored": null,
} satisfies SearchToolsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchToolsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


