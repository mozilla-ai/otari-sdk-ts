
# ModelMetadata

models.dev metadata for one model, for the dashboard\'s detail view.

## Properties

Name | Type
------------ | -------------
`attachment` | boolean
`contextWindow` | number
`costInput` | number
`costOutput` | number
`deprecated` | boolean
`description` | string
`family` | string
`inputModalities` | Array&lt;string&gt;
`knowledgeCutoff` | string
`lastUpdated` | string
`maxOutputTokens` | number
`name` | string
`openWeights` | boolean
`outputModalities` | Array&lt;string&gt;
`reasoning` | boolean
`releaseDate` | string
`structuredOutput` | boolean
`temperature` | boolean
`toolCall` | boolean

## Example

```typescript
import type { ModelMetadata } from ''

// TODO: Update the object below with actual values
const example = {
  "attachment": null,
  "contextWindow": null,
  "costInput": null,
  "costOutput": null,
  "deprecated": null,
  "description": null,
  "family": null,
  "inputModalities": null,
  "knowledgeCutoff": null,
  "lastUpdated": null,
  "maxOutputTokens": null,
  "name": null,
  "openWeights": null,
  "outputModalities": null,
  "reasoning": null,
  "releaseDate": null,
  "structuredOutput": null,
  "temperature": null,
  "toolCall": null,
} satisfies ModelMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


