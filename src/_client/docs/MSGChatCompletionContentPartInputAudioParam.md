
# MSGChatCompletionContentPartInputAudioParam

Learn about [audio inputs](https://developers.openai.com/api/docs/guides/audio).

## Properties

Name | Type
------------ | -------------
`inputAudio` | [MSGInputAudio](MSGInputAudio.md)
`type` | string
`promptCacheBreakpoint` | [MSGPromptCacheBreakpoint](MSGPromptCacheBreakpoint.md)

## Example

```typescript
import type { MSGChatCompletionContentPartInputAudioParam } from ''

// TODO: Update the object below with actual values
const example = {
  "inputAudio": null,
  "type": null,
  "promptCacheBreakpoint": null,
} satisfies MSGChatCompletionContentPartInputAudioParam

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MSGChatCompletionContentPartInputAudioParam
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


