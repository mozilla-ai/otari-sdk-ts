
# UpdateKeyRequest

Request model for updating a key.

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
`isActive` | boolean
`isServiceKey` | boolean
`keyName` | string
`maxEndUsers` | number
`metadata` | { [key: string]: any; }
`rejectUserMismatch` | boolean

## Example

```typescript
import type { UpdateKeyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedModels": null,
  "allowedTools": null,
  "captureAgentTelemetry": null,
  "endUserBudgetId": null,
  "endUserBudgetIds": null,
  "excludeFromBudget": null,
  "expiresAt": null,
  "isActive": null,
  "isServiceKey": null,
  "keyName": null,
  "maxEndUsers": null,
  "metadata": null,
  "rejectUserMismatch": null,
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


