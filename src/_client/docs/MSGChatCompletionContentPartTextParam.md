
# MSGChatCompletionContentPartTextParam

Learn about [text inputs](https://developers.openai.com/api/docs/guides/text).

## Properties

Name | Type
------------ | -------------
`text` | string
`type` | string
`promptCacheBreakpoint` | [MSGPromptCacheBreakpoint](MSGPromptCacheBreakpoint.md)

## Example

```typescript
import type { MSGChatCompletionContentPartTextParam } from ''

// TODO: Update the object below with actual values
const example = {
  "text": null,
  "type": null,
  "promptCacheBreakpoint": null,
} satisfies MSGChatCompletionContentPartTextParam

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MSGChatCompletionContentPartTextParam
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


