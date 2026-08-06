
# MRMessageUsage


## Properties

Name | Type
------------ | -------------
`cacheCreation` | [MRCacheCreation](MRCacheCreation.md)
`cacheCreationInputTokens` | number
`cacheReadInputTokens` | number
`inferenceGeo` | string
`inputTokens` | number
`outputTokens` | number
`serverToolUse` | [MRServerToolUsage](MRServerToolUsage.md)
`serviceTier` | string
`iterations` | [Array&lt;MRMessageUsageIterationsInner&gt;](MRMessageUsageIterationsInner.md)
`speed` | string

## Example

```typescript
import type { MRMessageUsage } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheCreation": null,
  "cacheCreationInputTokens": null,
  "cacheReadInputTokens": null,
  "inferenceGeo": null,
  "inputTokens": null,
  "outputTokens": null,
  "serverToolUse": null,
  "serviceTier": null,
  "iterations": null,
  "speed": null,
} satisfies MRMessageUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRMessageUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


