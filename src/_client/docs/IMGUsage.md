
# IMGUsage

For `gpt-image-1` only, the token usage information for the image generation.

## Properties

Name | Type
------------ | -------------
`inputTokens` | number
`inputTokensDetails` | [IMGUsageInputTokensDetails](IMGUsageInputTokensDetails.md)
`outputTokens` | number
`totalTokens` | number
`outputTokensDetails` | [IMGUsageOutputTokensDetails](IMGUsageOutputTokensDetails.md)

## Example

```typescript
import type { IMGUsage } from ''

// TODO: Update the object below with actual values
const example = {
  "inputTokens": null,
  "inputTokensDetails": null,
  "outputTokens": null,
  "totalTokens": null,
  "outputTokensDetails": null,
} satisfies IMGUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IMGUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


