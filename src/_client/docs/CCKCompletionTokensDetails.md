
# CCKCompletionTokensDetails

OpenAI completion token breakdown extended with image output tokens.  Like ``audio_tokens`` and ``reasoning_tokens``, ``image_tokens`` is a subset of ``completion_tokens``. The name follows OpenAI\'s Images API usage (``output_tokens_details.image_tokens``).

## Properties

Name | Type
------------ | -------------
`acceptedPredictionTokens` | number
`audioTokens` | number
`reasoningTokens` | number
`rejectedPredictionTokens` | number
`imageTokens` | number

## Example

```typescript
import type { CCKCompletionTokensDetails } from ''

// TODO: Update the object below with actual values
const example = {
  "acceptedPredictionTokens": null,
  "audioTokens": null,
  "reasoningTokens": null,
  "rejectedPredictionTokens": null,
  "imageTokens": null,
} satisfies CCKCompletionTokensDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCKCompletionTokensDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


