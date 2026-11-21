
# BATCHBatchUsage

Represents token usage details including input tokens, output tokens, a breakdown of output tokens, and the total tokens used. Only populated on batches created after September 7, 2025.

## Properties

Name | Type
------------ | -------------
`inputTokens` | number
`inputTokensDetails` | [BATCHInputTokensDetails](BATCHInputTokensDetails.md)
`outputTokens` | number
`outputTokensDetails` | [BATCHOutputTokensDetails](BATCHOutputTokensDetails.md)
`totalTokens` | number

## Example

```typescript
import type { BATCHBatchUsage } from ''

// TODO: Update the object below with actual values
const example = {
  "inputTokens": null,
  "inputTokensDetails": null,
  "outputTokens": null,
  "outputTokensDetails": null,
  "totalTokens": null,
} satisfies BATCHBatchUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BATCHBatchUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


