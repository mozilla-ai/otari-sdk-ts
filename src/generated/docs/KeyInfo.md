
# KeyInfo

Response model for key information.

## Properties

Name | Type
------------ | -------------
`createdAt` | string
`expiresAt` | string
`id` | string
`isActive` | boolean
`keyName` | string
`lastUsedAt` | string
`metadata` | { [key: string]: any; }
`userId` | string

## Example

```typescript
import type { KeyInfo } from 'otari-control-plane'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "expiresAt": null,
  "id": null,
  "isActive": null,
  "keyName": null,
  "lastUsedAt": null,
  "metadata": null,
  "userId": null,
} satisfies KeyInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KeyInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


