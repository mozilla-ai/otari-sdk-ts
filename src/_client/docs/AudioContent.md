
# AudioContent

Audio content for a message.

## Properties

Name | Type
------------ | -------------
`meta` | { [key: string]: any; }
`annotations` | [Annotations](Annotations.md)
`data` | string
`mimeType` | string
`type` | string

## Example

```typescript
import type { AudioContent } from ''

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "annotations": null,
  "data": null,
  "mimeType": null,
  "type": null,
} satisfies AudioContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudioContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


