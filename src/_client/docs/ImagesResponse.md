
# ImagesResponse

The response from the image generation endpoint.

## Properties

Name | Type
------------ | -------------
`created` | number
`background` | string
`data` | [Array&lt;IMGImage&gt;](IMGImage.md)
`outputFormat` | string
`quality` | string
`size` | string
`usage` | [IMGUsage](IMGUsage.md)

## Example

```typescript
import type { ImagesResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "created": null,
  "background": null,
  "data": null,
  "outputFormat": null,
  "quality": null,
  "size": null,
  "usage": null,
} satisfies ImagesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImagesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


