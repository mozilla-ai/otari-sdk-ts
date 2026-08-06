
# SearchRequest

A search request, following LiteLLM\'s ``/v1/search`` body.

## Properties

Name | Type
------------ | -------------
`country` | string
`maxResults` | number
`maxTokensPerPage` | number
`query` | string
`searchDomainFilter` | Array&lt;string&gt;
`searchToolName` | string
`user` | string

## Example

```typescript
import type { SearchRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "country": null,
  "maxResults": null,
  "maxTokensPerPage": null,
  "query": null,
  "searchDomainFilter": null,
  "searchToolName": null,
  "user": null,
} satisfies SearchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


