
# MRMessageIterationUsage

Usage of one sampling iteration of the requested model.  The Anthropic SDK requires ``model`` here, but a Messages stream can arrive without it (Otari relays code-execution turns that way), and strict validation would then reject the whole event. The SDK itself builds its objects without validating, so its own instances can lack it too.

## Properties

Name | Type
------------ | -------------
`cacheCreation` | [MRBetaCacheCreation](MRBetaCacheCreation.md)
`cacheCreationInputTokens` | number
`cacheReadInputTokens` | number
`inputTokens` | number
`model` | string
`outputTokens` | number
`type` | string

## Example

```typescript
import type { MRMessageIterationUsage } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheCreation": null,
  "cacheCreationInputTokens": null,
  "cacheReadInputTokens": null,
  "inputTokens": null,
  "model": null,
  "outputTokens": null,
  "type": null,
} satisfies MRMessageIterationUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRMessageIterationUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


