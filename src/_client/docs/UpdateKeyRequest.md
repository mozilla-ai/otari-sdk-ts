
# UpdateKeyRequest

Request model for updating a key.

## Properties

Name | Type
------------ | -------------
`expiresAt` | Date
`isActive` | boolean
`keyName` | string
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { UpdateKeyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "expiresAt": null,
  "isActive": null,
  "keyName": null,
  "metadata": null,
} satisfies UpdateKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


