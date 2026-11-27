
# SearchRequest

A direct search request: LiteLLM\'s ``/v1/search`` body, plus ``include_raw`` and ``provider_options``.

## Properties

Name | Type
------------ | -------------
`country` | string
`includeRaw` | boolean
`maxResults` | number
`maxTokensPerPage` | number
`providerOptions` | { [key: string]: any; }
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
  "includeRaw": null,
  "maxResults": null,
  "maxTokensPerPage": null,
  "providerOptions": null,
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


