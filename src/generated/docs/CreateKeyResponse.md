
# CreateKeyResponse

Response model for creating a new API key.

## Properties

Name | Type
------------ | -------------
`createdAt` | string
`expiresAt` | string
`id` | string
`isActive` | boolean
`key` | string
`keyName` | string
`metadata` | { [key: string]: any; }
`userId` | string

## Example

```typescript
import type { CreateKeyResponse } from 'otari-control-plane'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "expiresAt": null,
  "id": null,
  "isActive": null,
  "key": null,
  "keyName": null,
  "metadata": null,
  "userId": null,
} satisfies CreateKeyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateKeyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


