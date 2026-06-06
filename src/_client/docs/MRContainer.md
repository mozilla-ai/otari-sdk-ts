
# MRContainer

Information about the container used in the request (for the code execution tool)

## Properties

Name | Type
------------ | -------------
`id` | string
`expiresAt` | Date

## Example

```typescript
import type { MRContainer } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "expiresAt": null,
} satisfies MRContainer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRContainer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


