
# MRTextBlock


## Properties

Name | Type
------------ | -------------
`citations` | [Array&lt;MRTextBlockCitationsInner&gt;](MRTextBlockCitationsInner.md)
`text` | string
`type` | string

## Example

```typescript
import type { MRTextBlock } from ''

// TODO: Update the object below with actual values
const example = {
  "citations": null,
  "text": null,
  "type": null,
} satisfies MRTextBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRTextBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


