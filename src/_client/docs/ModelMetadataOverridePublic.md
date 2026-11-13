
# ModelMetadataOverridePublic

An override as stored, under the selector it describes.

## Properties

Name | Type
------------ | -------------
`contextWindow` | number
`inputModalities` | Array&lt;string&gt;
`maxOutputTokens` | number
`reasoning` | boolean
`selector` | string
`structuredOutput` | boolean
`toolCall` | boolean

## Example

```typescript
import type { ModelMetadataOverridePublic } from ''

// TODO: Update the object below with actual values
const example = {
  "contextWindow": null,
  "inputModalities": null,
  "maxOutputTokens": null,
  "reasoning": null,
  "selector": null,
  "structuredOutput": null,
  "toolCall": null,
} satisfies ModelMetadataOverridePublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelMetadataOverridePublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


