
# SearchToolTestResponse

How one search or one fetch went. Never the results or the page.

## Properties

Name | Type
------------ | -------------
`characters` | number
`error` | string
`hits` | number
`ok` | boolean

## Example

```typescript
import type { SearchToolTestResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "characters": null,
  "error": null,
  "hits": null,
  "ok": null,
} satisfies SearchToolTestResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchToolTestResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


