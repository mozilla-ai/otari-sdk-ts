
# UpdateOwnKeyRequest

Update-key body for the member surface.  The operator\'s ``UpdateKeyRequest`` minus ``exclude_from_budget``, for the reason the create body gives. The tri-state fields follow the same ``model_fields_set`` idiom: absent = unchanged, null = clear to inherit, a value = pin it. ``is_service_key`` is accepted only unchanged, and ``max_end_users`` takes no null: an organization\'s service key always has a cap, so null is refused with 400.

## Properties

Name | Type
------------ | -------------
`allowedModels` | Array&lt;string&gt;
`allowedTools` | Array&lt;string&gt;
`captureAgentTelemetry` | boolean
`endUserBudgetId` | string
`endUserBudgetIds` | Array&lt;string&gt;
`expiresAt` | Date
`isActive` | boolean
`isServiceKey` | boolean
`keyName` | string
`maxEndUsers` | number
`metadata` | { [key: string]: any; }
`rejectUserMismatch` | boolean

## Example

```typescript
import type { UpdateOwnKeyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedModels": null,
  "allowedTools": null,
  "captureAgentTelemetry": null,
  "endUserBudgetId": null,
  "endUserBudgetIds": null,
  "expiresAt": null,
  "isActive": null,
  "isServiceKey": null,
  "keyName": null,
  "maxEndUsers": null,
  "metadata": null,
  "rejectUserMismatch": null,
} satisfies UpdateOwnKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateOwnKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


