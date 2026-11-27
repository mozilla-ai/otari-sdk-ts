
# MRBetaFallbackMessageIterationUsage

Token usage for the fallback-model attempt of a server-side fallback request.  The terminal entry of a fallback-served turn: when a fallback hop\'s output is the returned message, the entry for the iteration that completed it carries this type in place of `message`. A declined hop and the serving hop\'s earlier tool-loop iterations produce `message` entries. Whether a fallback model served the response is signalled by the presence of this entry in `usage.iterations`.

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
import type { MRBetaFallbackMessageIterationUsage } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheCreation": null,
  "cacheCreationInputTokens": null,
  "cacheReadInputTokens": null,
  "inputTokens": null,
  "model": null,
  "outputTokens": null,
  "type": null,
} satisfies MRBetaFallbackMessageIterationUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaFallbackMessageIterationUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


