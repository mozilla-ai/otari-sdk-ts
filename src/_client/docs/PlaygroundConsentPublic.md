
# PlaygroundConsentPublic

What this identity has agreed the Playground may store.  Two flags rather than one, matching what the page asks for at the moment it asks: saving a transcript and recording a model preference are different disclosures (the second stores *both* models\' full answers), and the old page asked about each separately at the point of use. An identity with no stored row reads back as both false.

## Properties

Name | Type
------------ | -------------
`storeComparisons` | boolean
`storeConversations` | boolean

## Example

```typescript
import type { PlaygroundConsentPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "storeComparisons": null,
  "storeConversations": null,
} satisfies PlaygroundConsentPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundConsentPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


