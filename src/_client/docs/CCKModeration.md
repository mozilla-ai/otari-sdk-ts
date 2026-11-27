
# CCKModeration

Moderation results for the request input and generated output.  Present on the moderation chunk when moderated completions are requested.

## Properties

Name | Type
------------ | -------------
`input` | [Input3](Input3.md)
`output` | [Output1](Output1.md)

## Example

```typescript
import type { CCKModeration } from ''

// TODO: Update the object below with actual values
const example = {
  "input": null,
  "output": null,
} satisfies CCKModeration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCKModeration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


