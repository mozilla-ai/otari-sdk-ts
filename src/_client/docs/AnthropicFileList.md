
# AnthropicFileList

A page of files in Anthropic\'s list shape, whose cursor is an opaque token.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;AnthropicFileMetadata&gt;](AnthropicFileMetadata.md)
`nextPage` | string

## Example

```typescript
import type { AnthropicFileList } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "nextPage": null,
} satisfies AnthropicFileList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnthropicFileList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


