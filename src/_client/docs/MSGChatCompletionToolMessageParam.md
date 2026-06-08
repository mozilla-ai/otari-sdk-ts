
# MSGChatCompletionToolMessageParam


## Properties

Name | Type
------------ | -------------
`content` | [Content1](Content1.md)
`role` | string
`toolCallId` | string

## Example

```typescript
import type { MSGChatCompletionToolMessageParam } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "role": null,
  "toolCallId": null,
} satisfies MSGChatCompletionToolMessageParam

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MSGChatCompletionToolMessageParam
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


