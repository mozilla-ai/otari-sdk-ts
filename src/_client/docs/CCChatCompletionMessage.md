
# CCChatCompletionMessage


## Properties

Name | Type
------------ | -------------
`content` | string
`refusal` | string
`role` | string
`annotations` | Array&lt;{ [key: string]: any; }&gt;
`audio` | [CCChatCompletionAudio](CCChatCompletionAudio.md)
`functionCall` | [CCFunctionCall](CCFunctionCall.md)
`toolCalls` | [Array&lt;CCChatCompletionMessageToolCallsInner&gt;](CCChatCompletionMessageToolCallsInner.md)
`reasoning` | [CCReasoning](CCReasoning.md)

## Example

```typescript
import type { CCChatCompletionMessage } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "refusal": null,
  "role": null,
  "annotations": null,
  "audio": null,
  "functionCall": null,
  "toolCalls": null,
  "reasoning": null,
} satisfies CCChatCompletionMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCChatCompletionMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


