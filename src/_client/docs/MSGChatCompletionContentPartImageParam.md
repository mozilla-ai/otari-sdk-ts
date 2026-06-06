
# MSGChatCompletionContentPartImageParam

Learn about [image inputs](https://platform.openai.com/docs/guides/vision).

## Properties

Name | Type
------------ | -------------
`imageUrl` | [MSGImageURL](MSGImageURL.md)
`type` | string

## Example

```typescript
import type { MSGChatCompletionContentPartImageParam } from ''

// TODO: Update the object below with actual values
const example = {
  "imageUrl": null,
  "type": null,
} satisfies MSGChatCompletionContentPartImageParam

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MSGChatCompletionContentPartImageParam
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


