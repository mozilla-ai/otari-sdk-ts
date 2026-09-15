
# Resource


## Properties

Name | Type
------------ | -------------
`meta` | { [key: string]: any; }
`mimeType` | string
`text` | string
`uri` | string
`blob` | string

## Example

```typescript
import type { Resource } from ''

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "mimeType": null,
  "text": null,
  "uri": null,
  "blob": null,
} satisfies Resource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Resource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


