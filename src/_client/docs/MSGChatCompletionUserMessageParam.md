
# MSGChatCompletionUserMessageParam

Messages sent by an end user, containing prompts or additional context information.

## Properties

Name | Type
------------ | -------------
`content` | [Content2](Content2.md)
`role` | string
`name` | string

## Example

```typescript
import type { MSGChatCompletionUserMessageParam } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "role": null,
  "name": null,
} satisfies MSGChatCompletionUserMessageParam

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MSGChatCompletionUserMessageParam
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


