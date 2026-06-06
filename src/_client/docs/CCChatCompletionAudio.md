
# CCChatCompletionAudio

If the audio output modality is requested, this object contains data about the audio response from the model. [Learn more](https://platform.openai.com/docs/guides/audio).

## Properties

Name | Type
------------ | -------------
`id` | string
`data` | string
`expiresAt` | number
`transcript` | string

## Example

```typescript
import type { CCChatCompletionAudio } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "data": null,
  "expiresAt": null,
  "transcript": null,
} satisfies CCChatCompletionAudio

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCChatCompletionAudio
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


