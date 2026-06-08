
# ImageGenerationRequest

OpenAI-compatible image generation request.

## Properties

Name | Type
------------ | -------------
`model` | string
`n` | number
`prompt` | string
`quality` | string
`responseFormat` | string
`size` | string
`style` | string
`user` | string

## Example

```typescript
import type { ImageGenerationRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "model": null,
  "n": null,
  "prompt": null,
  "quality": null,
  "responseFormat": null,
  "size": null,
  "style": null,
  "user": null,
} satisfies ImageGenerationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImageGenerationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


