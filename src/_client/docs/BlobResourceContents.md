
# BlobResourceContents

Binary contents of a resource.

## Properties

Name | Type
------------ | -------------
`meta` | { [key: string]: any; }
`blob` | string
`mimeType` | string
`uri` | string

## Example

```typescript
import type { BlobResourceContents } from ''

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "blob": null,
  "mimeType": null,
  "uri": null,
} satisfies BlobResourceContents

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BlobResourceContents
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


