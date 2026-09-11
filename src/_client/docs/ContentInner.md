
# ContentInner


## Properties

Name | Type
------------ | -------------
`meta` | { [key: string]: any; }
`annotations` | [Annotations](Annotations.md)
`text` | string
`type` | string
`data` | string
`mimeType` | string
`description` | string
`icons` | [Array&lt;Icon&gt;](Icon.md)
`name` | string
`size` | number
`title` | string
`uri` | string
`resource` | [Resource](Resource.md)

## Example

```typescript
import type { ContentInner } from ''

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "annotations": null,
  "text": null,
  "type": null,
  "data": null,
  "mimeType": null,
  "description": null,
  "icons": null,
  "name": null,
  "size": null,
  "title": null,
  "uri": null,
  "resource": null,
} satisfies ContentInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContentInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


