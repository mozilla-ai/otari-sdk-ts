
# CreateOwnKeyRequest

Create-key body for the member surface.  Deliberately not ``CreateKeyRequest``: it carries no ``user_id`` (the owner is always the caller) and no ``exclude_from_budget`` (a member must not exempt their own spend from enforcement).

## Properties

Name | Type
------------ | -------------
`allowedModels` | Array&lt;string&gt;
`captureAgentTelemetry` | boolean
`expiresAt` | Date
`keyName` | string
`metadata` | { [key: string]: any; }
`rejectUserMismatch` | boolean
`workspaceId` | string

## Example

```typescript
import type { CreateOwnKeyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedModels": null,
  "captureAgentTelemetry": null,
  "expiresAt": null,
  "keyName": null,
  "metadata": null,
  "rejectUserMismatch": null,
  "workspaceId": null,
} satisfies CreateOwnKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOwnKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


