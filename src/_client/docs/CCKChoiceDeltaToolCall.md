
# CCKChoiceDeltaToolCall

Streaming counterpart of ``ChatCompletionMessageFunctionToolCall``.  Adds the same ``extra_content`` field so provider-specific tool-call metadata (e.g. Gemini\'s ``thought_signature``) can be carried on streaming deltas, not just on the final non-streaming tool call.

## Properties

Name | Type
------------ | -------------
`index` | number
`id` | string
`_function` | [CCKChoiceDeltaToolCallFunction](CCKChoiceDeltaToolCallFunction.md)
`type` | string
`extraContent` | { [key: string]: any; }

## Example

```typescript
import type { CCKChoiceDeltaToolCall } from ''

// TODO: Update the object below with actual values
const example = {
  "index": null,
  "id": null,
  "_function": null,
  "type": null,
  "extraContent": null,
} satisfies CCKChoiceDeltaToolCall

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCKChoiceDeltaToolCall
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


