
# CCKModerationInputError

An error produced while attempting moderation.

## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string
`type` | string

## Example

```typescript
import type { CCKModerationInputError } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "message": null,
  "type": null,
} satisfies CCKModerationInputError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCKModerationInputError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


