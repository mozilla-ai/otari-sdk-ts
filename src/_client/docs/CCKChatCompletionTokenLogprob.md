
# CCKChatCompletionTokenLogprob


## Properties

Name | Type
------------ | -------------
`token` | string
`bytes` | Array&lt;number&gt;
`logprob` | number
`topLogprobs` | [Array&lt;CCKTopLogprob&gt;](CCKTopLogprob.md)

## Example

```typescript
import type { CCKChatCompletionTokenLogprob } from ''

// TODO: Update the object below with actual values
const example = {
  "token": null,
  "bytes": null,
  "logprob": null,
  "topLogprobs": null,
} satisfies CCKChatCompletionTokenLogprob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCKChatCompletionTokenLogprob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


