
# CCModeration

Moderation results for the request input and generated output, if moderated completions were requested.

## Properties

Name | Type
------------ | -------------
`input` | [Input2](Input2.md)
`output` | [Output](Output.md)

## Example

```typescript
import type { CCModeration } from ''

// TODO: Update the object below with actual values
const example = {
  "input": null,
  "output": null,
} satisfies CCModeration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCModeration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


