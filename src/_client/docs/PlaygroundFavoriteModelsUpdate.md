
# PlaygroundFavoriteModelsUpdate

The whole pin list, replacing whatever was stored.  A replace rather than a toggle endpoint, because the client already holds the list it is rendering and the order is part of it (a newly pinned model leads). Two tabs racing therefore resolve to one of the two lists rather than to an interleaving neither of them showed.

## Properties

Name | Type
------------ | -------------
`modelKeys` | Array&lt;string&gt;

## Example

```typescript
import type { PlaygroundFavoriteModelsUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "modelKeys": null,
} satisfies PlaygroundFavoriteModelsUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundFavoriteModelsUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


