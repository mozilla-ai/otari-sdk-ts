
# VideoGenerationRequest

Start a video generation job.  The fields are any-llm\'s ``VideoGenerationParams``, its ``model_id`` as ``model``; a field any-llm adds fails a test until the route accepts it. ``seconds`` is the length asked for, which the provider may round.

## Properties

Name | Type
------------ | -------------
`aspectRatio` | string
`firstFrame` | string
`lastFrame` | string
`model` | string
`negativePrompt` | string
`prompt` | string
`referenceAudios` | Array&lt;string&gt;
`referenceImages` | Array&lt;string&gt;
`resolution` | string
`seconds` | number
`seed` | number
`size` | string
`user` | string

## Example

```typescript
import type { VideoGenerationRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "aspectRatio": null,
  "firstFrame": null,
  "lastFrame": null,
  "model": null,
  "negativePrompt": null,
  "prompt": null,
  "referenceAudios": null,
  "referenceImages": null,
  "resolution": null,
  "seconds": null,
  "seed": null,
  "size": null,
  "user": null,
} satisfies VideoGenerationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VideoGenerationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


