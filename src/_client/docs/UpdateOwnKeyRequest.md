
# UpdateOwnKeyRequest

Update-key body for the member surface.  The operator\'s ``UpdateKeyRequest`` minus ``exclude_from_budget``, for the reason the create body gives. The tri-state fields follow the same ``model_fields_set`` idiom: absent = unchanged, null = clear to inherit, a value = pin it.

## Properties

Name | Type
------------ | -------------
`allowedModels` | Array&lt;string&gt;
`captureAgentTelemetry` | boolean
`expiresAt` | Date
`isActive` | boolean
`keyName` | string
`metadata` | { [key: string]: any; }
`rejectUserMismatch` | boolean

## Example

```typescript
import type { UpdateOwnKeyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedModels": null,
  "captureAgentTelemetry": null,
  "expiresAt": null,
  "isActive": null,
  "keyName": null,
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


