
# WebSearchBackendResponse

A SearXNG-compatible ``/search`` body.

## Properties

Name | Type
------------ | -------------
`results` | [Array&lt;WebSearchBackendResult&gt;](WebSearchBackendResult.md)

## Example

```typescript
import type { WebSearchBackendResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "results": null,
} satisfies WebSearchBackendResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebSearchBackendResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


