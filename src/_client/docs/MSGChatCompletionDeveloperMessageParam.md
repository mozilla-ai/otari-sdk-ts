
# MSGChatCompletionDeveloperMessageParam

Developer-provided instructions that the model should follow, regardless of messages sent by the user. With o1 models and newer, `developer` messages replace the previous `system` messages.

## Properties

Name | Type
------------ | -------------
`content` | [Content1](Content1.md)
`role` | string
`name` | string

## Example

```typescript
import type { MSGChatCompletionDeveloperMessageParam } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "role": null,
  "name": null,
} satisfies MSGChatCompletionDeveloperMessageParam

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MSGChatCompletionDeveloperMessageParam
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


