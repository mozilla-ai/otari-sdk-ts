
# SearchToolTestRequest

An unsaved search or fetch instance to test, and what to test it with.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`fetchTool` | string
`kind` | string
`name` | string
`options` | { [key: string]: any; }
`provider` | string
`query` | string
`timeout` | number
`url` | string

## Example

```typescript
import type { SearchToolTestRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "fetchTool": null,
  "kind": null,
  "name": null,
  "options": null,
  "provider": null,
  "query": null,
  "timeout": null,
  "url": null,
} satisfies SearchToolTestRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchToolTestRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


