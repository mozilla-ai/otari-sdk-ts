
# FetchResponse

A completed direct fetch: one page\'s text and where it came from.

## Properties

Name | Type
------------ | -------------
`contentType` | string
`fetchTool` | string
`finalUrl` | string
`object` | string
`published` | Date
`raw` | { [key: string]: any; }
`text` | string
`title` | string
`truncated` | boolean
`url` | string

## Example

```typescript
import type { FetchResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "contentType": null,
  "fetchTool": null,
  "finalUrl": null,
  "object": null,
  "published": null,
  "raw": null,
  "text": null,
  "title": null,
  "truncated": null,
  "url": null,
} satisfies FetchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FetchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


