
# CCChatCompletionMessageToolCallsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`_function` | [CCFunction](CCFunction.md)
`type` | string
`custom` | [CCCustom](CCCustom.md)

## Example

```typescript
import type { CCChatCompletionMessageToolCallsInner } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "_function": null,
  "type": null,
  "custom": null,
} satisfies CCChatCompletionMessageToolCallsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCChatCompletionMessageToolCallsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


