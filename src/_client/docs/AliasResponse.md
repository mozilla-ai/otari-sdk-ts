
# AliasResponse

A model alias and where it is defined.

## Properties

Name | Type
------------ | -------------
`createdAt` | string
`name` | string
`source` | string
`target` | string
`updatedAt` | string
`userId` | string

## Example

```typescript
import type { AliasResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "name": null,
  "source": null,
  "target": null,
  "updatedAt": null,
  "userId": null,
} satisfies AliasResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AliasResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


