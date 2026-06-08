
# MRContainerUploadBlock

Response model for a file uploaded to the container.

## Properties

Name | Type
------------ | -------------
`fileId` | string
`type` | string

## Example

```typescript
import type { MRContainerUploadBlock } from ''

// TODO: Update the object below with actual values
const example = {
  "fileId": null,
  "type": null,
} satisfies MRContainerUploadBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRContainerUploadBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


