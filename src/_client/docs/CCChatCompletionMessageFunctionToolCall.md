
# CCChatCompletionMessageFunctionToolCall

Extended tool call type that includes extra_content for provider-specific data.  The extra_content field is used to store provider-specific metadata that needs to be preserved across multi-turn conversations. For example, Gemini 3 models require thought_signature to be passed back with function calls.  Example extra_content structure for Gemini:     {\"google\": {\"thought_signature\": \"<base64-encoded-signature>\"}}

## Properties

Name | Type
------------ | -------------
`id` | string
`_function` | [CCFunction](CCFunction.md)
`type` | string
`extraContent` | { [key: string]: any; }

## Example

```typescript
import type { CCChatCompletionMessageFunctionToolCall } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "_function": null,
  "type": null,
  "extraContent": null,
} satisfies CCChatCompletionMessageFunctionToolCall

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCChatCompletionMessageFunctionToolCall
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


