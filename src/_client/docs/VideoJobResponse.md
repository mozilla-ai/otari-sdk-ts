
# VideoJobResponse

A video generation job as the provider reports it, in the shape of OpenAI\'s video object.

## Properties

Name | Type
------------ | -------------
`completedAt` | number
`createdAt` | number
`error` | [VideoError](VideoError.md)
`id` | string
`model` | string
`object` | string
`progress` | number
`provider` | string
`seconds` | number
`size` | string
`status` | string

## Example

```typescript
import type { VideoJobResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "completedAt": null,
  "createdAt": null,
  "error": null,
  "id": null,
  "model": null,
  "object": null,
  "progress": null,
  "provider": null,
  "seconds": null,
  "size": null,
  "status": null,
} satisfies VideoJobResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VideoJobResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


