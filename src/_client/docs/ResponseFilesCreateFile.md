
# ResponseFilesCreateFile


## Properties

Name | Type
------------ | -------------
`bytes` | number
`createdAt` | string
`expiresAt` | string
`filename` | string
`id` | string
`object` | string
`purpose` | string
`downloadable` | boolean
`mimeType` | string
`sizeBytes` | number
`type` | string

## Example

```typescript
import type { ResponseFilesCreateFile } from ''

// TODO: Update the object below with actual values
const example = {
  "bytes": null,
  "createdAt": null,
  "expiresAt": null,
  "filename": null,
  "id": null,
  "object": null,
  "purpose": null,
  "downloadable": null,
  "mimeType": null,
  "sizeBytes": null,
  "type": null,
} satisfies ResponseFilesCreateFile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResponseFilesCreateFile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


