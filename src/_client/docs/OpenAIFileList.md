
# OpenAIFileList

A page of files in OpenAI\'s list shape, whose cursor is the last entry\'s ID.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;OpenAIFileObject&gt;](OpenAIFileObject.md)
`firstId` | string
`hasMore` | boolean
`lastId` | string
`object` | string

## Example

```typescript
import type { OpenAIFileList } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "firstId": null,
  "hasMore": null,
  "lastId": null,
  "object": null,
} satisfies OpenAIFileList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OpenAIFileList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


