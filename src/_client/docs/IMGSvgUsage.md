
# IMGSvgUsage

Token usage for SVG authoring, separate from image rendering usage.

## Properties

Name | Type
------------ | -------------
`inputTokens` | number
`model` | string
`outputTokens` | number
`reasoningTokens` | number
`totalTokens` | number

## Example

```typescript
import type { IMGSvgUsage } from ''

// TODO: Update the object below with actual values
const example = {
  "inputTokens": null,
  "model": null,
  "outputTokens": null,
  "reasoningTokens": null,
  "totalTokens": null,
} satisfies IMGSvgUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IMGSvgUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


