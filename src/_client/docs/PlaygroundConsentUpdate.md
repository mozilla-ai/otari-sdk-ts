
# PlaygroundConsentUpdate

A partial update: an omitted flag is left as it was.  Tri-state on purpose. The page grants one flag at a time, just in time, so a request that carried both would silently re-assert the other, which is the wrong direction for a consent record to move on its own.

## Properties

Name | Type
------------ | -------------
`storeComparisons` | boolean
`storeConversations` | boolean

## Example

```typescript
import type { PlaygroundConsentUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "storeComparisons": null,
  "storeConversations": null,
} satisfies PlaygroundConsentUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundConsentUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


