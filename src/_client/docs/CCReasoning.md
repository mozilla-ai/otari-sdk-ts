
# CCReasoning

Reasoning content emitted by a model.  Serializes as a plain JSON string so that responses are compatible with OpenAI-style clients that expect ``delta.reasoning`` / ``message.reasoning`` to be a string. The Python attribute ``content`` remains available for typed access (e.g. ``message.reasoning.content``).

## Properties

Name | Type
------------ | -------------
`content` | string

## Example

```typescript
import type { CCReasoning } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
} satisfies CCReasoning

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCReasoning
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


