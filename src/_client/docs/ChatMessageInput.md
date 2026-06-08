
# ChatMessageInput


## Properties

Name | Type
------------ | -------------
`content` | string
`role` | string
`name` | string
`audio` | [MSGAudio](MSGAudio.md)
`functionCall` | [MSGFunctionCall](MSGFunctionCall.md)
`refusal` | string
`toolCalls` | [Array&lt;ToolCallsInner&gt;](ToolCallsInner.md)
`toolCallId` | string

## Example

```typescript
import type { ChatMessageInput } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "role": null,
  "name": null,
  "audio": null,
  "functionCall": null,
  "refusal": null,
  "toolCalls": null,
  "toolCallId": null,
} satisfies ChatMessageInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatMessageInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


