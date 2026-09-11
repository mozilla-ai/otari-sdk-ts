
# TextContent

Text content for a message.

## Properties

Name | Type
------------ | -------------
`meta` | { [key: string]: any; }
`annotations` | [Annotations](Annotations.md)
`text` | string
`type` | string

## Example

```typescript
import type { TextContent } from ''

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "annotations": null,
  "text": null,
  "type": null,
} satisfies TextContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TextContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


