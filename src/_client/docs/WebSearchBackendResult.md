
# WebSearchBackendResult

One hit, in the shape ``WebSearchBackend`` reads off a SearXNG response.

## Properties

Name | Type
------------ | -------------
`content` | string
`extractedContent` | string
`publishedDate` | string
`title` | string
`url` | string

## Example

```typescript
import type { WebSearchBackendResult } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "extractedContent": null,
  "publishedDate": null,
  "title": null,
  "url": null,
} satisfies WebSearchBackendResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebSearchBackendResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


