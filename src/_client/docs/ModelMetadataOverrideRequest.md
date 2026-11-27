
# ModelMetadataOverrideRequest

What to say about a model in place of its server and models.dev. A null field is not overridden.

## Properties

Name | Type
------------ | -------------
`contextWindow` | number
`inputModalities` | Array&lt;string&gt;
`maxOutputTokens` | number
`reasoning` | boolean
`structuredOutput` | boolean
`toolCall` | boolean

## Example

```typescript
import type { ModelMetadataOverrideRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "contextWindow": null,
  "inputModalities": null,
  "maxOutputTokens": null,
  "reasoning": null,
  "structuredOutput": null,
  "toolCall": null,
} satisfies ModelMetadataOverrideRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelMetadataOverrideRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


