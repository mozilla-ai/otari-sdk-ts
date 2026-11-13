
# Annotations

Optional annotations the client can use to inform how objects are used or displayed.

## Properties

Name | Type
------------ | -------------
`audience` | Array&lt;string&gt;
`lastModified` | string
`priority` | number

## Example

```typescript
import type { Annotations } from ''

// TODO: Update the object below with actual values
const example = {
  "audience": null,
  "lastModified": null,
  "priority": null,
} satisfies Annotations

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Annotations
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


