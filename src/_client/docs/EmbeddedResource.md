
# EmbeddedResource

The contents of a resource, embedded into a prompt or tool call result.  It is up to the client how best to render embedded resources for the benefit of the LLM and/or the user.

## Properties

Name | Type
------------ | -------------
`meta` | { [key: string]: any; }
`annotations` | [Annotations](Annotations.md)
`resource` | [Resource](Resource.md)
`type` | string

## Example

```typescript
import type { EmbeddedResource } from ''

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "annotations": null,
  "resource": null,
  "type": null,
} satisfies EmbeddedResource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedResource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


