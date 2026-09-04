
# MRBetaAdvisorMessageIterationUsage

Token usage for an advisor sub-inference iteration.

## Properties

Name | Type
------------ | -------------
`cacheCreation` | [MRBetaCacheCreation](MRBetaCacheCreation.md)
`cacheCreationInputTokens` | number
`cacheReadInputTokens` | number
`inputTokens` | number
`model` | [Model1](Model1.md)
`outputTokens` | number
`type` | string

## Example

```typescript
import type { MRBetaAdvisorMessageIterationUsage } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheCreation": null,
  "cacheCreationInputTokens": null,
  "cacheReadInputTokens": null,
  "inputTokens": null,
  "model": null,
  "outputTokens": null,
  "type": null,
} satisfies MRBetaAdvisorMessageIterationUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaAdvisorMessageIterationUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


