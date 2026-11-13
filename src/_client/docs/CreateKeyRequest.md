
# CreateKeyRequest

Request model for creating a new API key.

## Properties

Name | Type
------------ | -------------
`allowedModels` | Array&lt;string&gt;
`allowedTools` | Array&lt;string&gt;
`captureAgentTelemetry` | boolean
`endUserBudgetId` | string
`endUserBudgetIds` | Array&lt;string&gt;
`excludeFromBudget` | boolean
`expiresAt` | Date
`isServiceKey` | boolean
`keyName` | string
`maxEndUsers` | number
`metadata` | { [key: string]: any; }
`rejectUserMismatch` | boolean
`userId` | string
`workspaceId` | string

## Example

```typescript
import type { CreateKeyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedModels": null,
  "allowedTools": null,
  "captureAgentTelemetry": null,
  "endUserBudgetId": null,
  "endUserBudgetIds": null,
  "excludeFromBudget": null,
  "expiresAt": null,
  "isServiceKey": null,
  "keyName": null,
  "maxEndUsers": null,
  "metadata": null,
  "rejectUserMismatch": null,
  "userId": null,
  "workspaceId": null,
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


