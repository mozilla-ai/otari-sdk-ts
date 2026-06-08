
# MSGChatCompletionMessageCustomToolCallParam

A call to a custom tool created by the model.

## Properties

Name | Type
------------ | -------------
`id` | string
`custom` | [MSGCustom](MSGCustom.md)
`type` | string

## Example

```typescript
import type { MSGChatCompletionMessageCustomToolCallParam } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "custom": null,
  "type": null,
} satisfies MSGChatCompletionMessageCustomToolCallParam

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MSGChatCompletionMessageCustomToolCallParam
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


