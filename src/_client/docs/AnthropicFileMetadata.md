
# AnthropicFileMetadata

One file in the ``FileMetadata`` shape of Anthropic\'s GA Files API.  ``expires_at`` is always present and ``None`` for a file kept indefinitely. ``downloadable`` is always true, because the gateway serves every stored file\'s bytes back.

## Properties

Name | Type
------------ | -------------
`createdAt` | string
`downloadable` | boolean
`expiresAt` | string
`filename` | string
`id` | string
`mimeType` | string
`sizeBytes` | number
`type` | string

## Example

```typescript
import type { AnthropicFileMetadata } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "downloadable": null,
  "expiresAt": null,
  "filename": null,
  "id": null,
  "mimeType": null,
  "sizeBytes": null,
  "type": null,
} satisfies AnthropicFileMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnthropicFileMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


