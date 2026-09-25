
# ResponseFilesListFiles


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;AnthropicFileMetadata&gt;](AnthropicFileMetadata.md)
`firstId` | string
`hasMore` | boolean
`lastId` | string
`object` | string
`nextPage` | string

## Example

```typescript
import type { ResponseFilesListFiles } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "firstId": null,
  "hasMore": null,
  "lastId": null,
  "object": null,
  "nextPage": null,
} satisfies ResponseFilesListFiles

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResponseFilesListFiles
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


