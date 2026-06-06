
# ValidationError


## Properties

Name | Type
------------ | -------------
`ctx` | object
`input` | any
`loc` | [Array&lt;LocationInner&gt;](LocationInner.md)
`msg` | string
`type` | string

## Example

```typescript
import type { ValidationError } from ''

// TODO: Update the object below with actual values
const example = {
  "ctx": null,
  "input": null,
  "loc": null,
  "msg": null,
  "type": null,
} satisfies ValidationError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


