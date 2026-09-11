
# ResourceLink

A resource that the server is capable of reading, included in a prompt or tool call result.  Note: resource links returned by tools are not guaranteed to appear in the results of `resources/list` requests.

## Properties

Name | Type
------------ | -------------
`meta` | { [key: string]: any; }
`annotations` | [Annotations](Annotations.md)
`description` | string
`icons` | [Array&lt;Icon&gt;](Icon.md)
`mimeType` | string
`name` | string
`size` | number
`title` | string
`type` | string
`uri` | string

## Example

```typescript
import type { ResourceLink } from ''

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "annotations": null,
  "description": null,
  "icons": null,
  "mimeType": null,
  "name": null,
  "size": null,
  "title": null,
  "type": null,
  "uri": null,
} satisfies ResourceLink

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResourceLink
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


