
# CreateKeyRequest

Request model for creating a new API key.

## Properties

Name | Type
------------ | -------------
`expiresAt` | Date
`keyName` | string
`metadata` | { [key: string]: any; }
`userId` | string

## Example

```typescript
import type { CreateKeyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "expiresAt": null,
  "keyName": null,
  "metadata": null,
  "userId": null,
} satisfies CreateKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


