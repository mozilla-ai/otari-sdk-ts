
# CatalogModelSummary

One model, as the list shows it.

## Properties

Name | Type
------------ | -------------
`capabilities` | [CatalogCapabilities](CatalogCapabilities.md)
`contextWindow` | number
`deprecated` | boolean
`description` | string
`discovered` | boolean
`family` | string
`id` | string
`inputModalities` | Array&lt;string&gt;
`knowledgeCutoff` | string
`maxOutputTokens` | number
`minInputPricePerMillion` | number
`minOutputPricePerMillion` | number
`name` | string
`offeringCount` | number
`openWeights` | boolean
`outputModalities` | Array&lt;string&gt;
`priceSources` | Array&lt;string&gt;
`providerCount` | number
`providers` | Array&lt;string&gt;
`releaseDate` | string
`resolvesTo` | string
`selector` | string
`selectors` | Array&lt;string&gt;
`unpricedCount` | number
`vendor` | string

## Example

```typescript
import type { CatalogModelSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "capabilities": null,
  "contextWindow": null,
  "deprecated": null,
  "description": null,
  "discovered": null,
  "family": null,
  "id": null,
  "inputModalities": null,
  "knowledgeCutoff": null,
  "maxOutputTokens": null,
  "minInputPricePerMillion": null,
  "minOutputPricePerMillion": null,
  "name": null,
  "offeringCount": null,
  "openWeights": null,
  "outputModalities": null,
  "priceSources": null,
  "providerCount": null,
  "providers": null,
  "releaseDate": null,
  "resolvesTo": null,
  "selector": null,
  "selectors": null,
  "unpricedCount": null,
  "vendor": null,
} satisfies CatalogModelSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogModelSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


