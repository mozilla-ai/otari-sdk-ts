
# MRDocumentBlock


## Properties

Name | Type
------------ | -------------
`citations` | [MRCitationsConfig](MRCitationsConfig.md)
`source` | [Source](Source.md)
`title` | string
`type` | string

## Example

```typescript
import type { MRDocumentBlock } from ''

// TODO: Update the object below with actual values
const example = {
  "citations": null,
  "source": null,
  "title": null,
  "type": null,
} satisfies MRDocumentBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRDocumentBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


