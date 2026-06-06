
# ModelListResponse

OpenAI-compatible model list response.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;ModelObject&gt;](ModelObject.md)
`object` | string

## Example

```typescript
import type { ModelListResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "object": null,
} satisfies ModelListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


