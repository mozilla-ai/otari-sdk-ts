
# KeyInfo

Response model for key information.

## Properties

Name | Type
------------ | -------------
`allowedModels` | Array&lt;string&gt;
`captureAgentTelemetry` | boolean
`createdAt` | string
`excludeFromBudget` | boolean
`expiresAt` | string
`id` | string
`isActive` | boolean
`keyName` | string
`keyPrefix` | string
`lastUsedAt` | string
`metadata` | { [key: string]: any; }
`rejectUserMismatch` | boolean
`userId` | string

## Example

```typescript
import type { KeyInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedModels": null,
  "captureAgentTelemetry": null,
  "createdAt": null,
  "excludeFromBudget": null,
  "expiresAt": null,
  "id": null,
  "isActive": null,
  "keyName": null,
  "keyPrefix": null,
  "lastUsedAt": null,
  "metadata": null,
  "rejectUserMismatch": null,
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


