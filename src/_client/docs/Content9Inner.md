
# Content9Inner


## Properties

Name | Type
------------ | -------------
`citations` | [Array&lt;MRTextBlockCitationsInner&gt;](MRTextBlockCitationsInner.md)
`text` | string
`type` | string
`signature` | string
`thinking` | string
`data` | string
`id` | string
`caller` | [Caller](Caller.md)
`input` | { [key: string]: any; }
`name` | string
`content` | [Content6](Content6.md)
`toolUseId` | string
`fileId` | string

## Example

```typescript
import type { Content9Inner } from ''

// TODO: Update the object below with actual values
const example = {
  "citations": null,
  "text": null,
  "type": null,
  "signature": null,
  "thinking": null,
  "data": null,
  "id": null,
  "caller": null,
  "input": null,
  "name": null,
  "content": null,
  "toolUseId": null,
  "fileId": null,
} satisfies Content9Inner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Content9Inner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


