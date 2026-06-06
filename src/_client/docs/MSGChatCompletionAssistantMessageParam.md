
# MSGChatCompletionAssistantMessageParam

Messages sent by the model in response to user messages.

## Properties

Name | Type
------------ | -------------
`role` | string
`audio` | [MSGAudio](MSGAudio.md)
`content` | [Content](Content.md)
`functionCall` | [MSGFunctionCall](MSGFunctionCall.md)
`name` | string
`refusal` | string
`toolCalls` | [Array&lt;ToolCallsInner&gt;](ToolCallsInner.md)

## Example

```typescript
import type { MSGChatCompletionAssistantMessageParam } from ''

// TODO: Update the object below with actual values
const example = {
  "role": null,
  "audio": null,
  "content": null,
  "functionCall": null,
  "name": null,
  "refusal": null,
  "toolCalls": null,
} satisfies MSGChatCompletionAssistantMessageParam

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MSGChatCompletionAssistantMessageParam
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


