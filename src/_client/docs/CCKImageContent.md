
# CCKImageContent

OpenAI-compatible image response content.

## Properties

Name | Type
------------ | -------------
`type` | string
`imageUrl` | [CCKImageURL](CCKImageURL.md)

## Example

```typescript
import type { CCKImageContent } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "imageUrl": null,
} satisfies CCKImageContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCKImageContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


