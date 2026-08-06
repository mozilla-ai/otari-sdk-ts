
# ModelMetadataResponse

models.dev metadata keyed by ``provider:model``.

## Properties

Name | Type
------------ | -------------
`available` | boolean
`models` | [{ [key: string]: ModelMetadata; }](ModelMetadata.md)
`source` | string

## Example

```typescript
import type { ModelMetadataResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "available": null,
  "models": null,
  "source": null,
} satisfies ModelMetadataResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelMetadataResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


