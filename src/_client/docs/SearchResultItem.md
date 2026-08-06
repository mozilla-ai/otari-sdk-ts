
# SearchResultItem

One search result.

## Properties

Name | Type
------------ | -------------
`date` | string
`snippet` | string
`title` | string
`url` | string

## Example

```typescript
import type { SearchResultItem } from ''

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "snippet": null,
  "title": null,
  "url": null,
} satisfies SearchResultItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchResultItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


