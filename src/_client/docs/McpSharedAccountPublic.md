
# McpSharedAccountPublic

The account a manager signed in to for everyone on a shared server. Never carries a token.

## Properties

Name | Type
------------ | -------------
`renewable` | boolean
`signedInAt` | string
`signedInBy` | string

## Example

```typescript
import type { McpSharedAccountPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "renewable": null,
  "signedInAt": null,
  "signedInBy": null,
} satisfies McpSharedAccountPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpSharedAccountPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


