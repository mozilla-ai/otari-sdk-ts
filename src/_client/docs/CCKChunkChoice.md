
# CCKChunkChoice


## Properties

Name | Type
------------ | -------------
`delta` | [CCKChoiceDelta](CCKChoiceDelta.md)
`finishReason` | string
`index` | number
`logprobs` | [CCKChoiceLogprobs](CCKChoiceLogprobs.md)

## Example

```typescript
import type { CCKChunkChoice } from ''

// TODO: Update the object below with actual values
const example = {
  "delta": null,
  "finishReason": null,
  "index": null,
  "logprobs": null,
} satisfies CCKChunkChoice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCKChunkChoice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


