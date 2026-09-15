
# CatalogCapabilities

What a model can do, as models.dev reports it. Any offering\'s yes is the model\'s.

## Properties

Name | Type
------------ | -------------
`attachment` | boolean
`reasoning` | boolean
`structuredOutput` | boolean
`temperature` | boolean
`toolCall` | boolean

## Example

```typescript
import type { CatalogCapabilities } from ''

// TODO: Update the object below with actual values
const example = {
  "attachment": null,
  "reasoning": null,
  "structuredOutput": null,
  "temperature": null,
  "toolCall": null,
} satisfies CatalogCapabilities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogCapabilities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


