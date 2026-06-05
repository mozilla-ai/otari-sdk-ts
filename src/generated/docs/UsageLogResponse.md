
# UsageLogResponse

Response model for usage log.

## Properties

Name | Type
------------ | -------------
`apiKeyId` | string
`completionTokens` | number
`cost` | number
`endpoint` | string
`errorMessage` | string
`id` | string
`model` | string
`promptTokens` | number
`provider` | string
`status` | string
`timestamp` | string
`totalTokens` | number
`userId` | string

## Example

```typescript
import type { UsageLogResponse } from 'otari-control-plane'

// TODO: Update the object below with actual values
const example = {
  "apiKeyId": null,
  "completionTokens": null,
  "cost": null,
  "endpoint": null,
  "errorMessage": null,
  "id": null,
  "model": null,
  "promptTokens": null,
  "provider": null,
  "status": null,
  "timestamp": null,
  "totalTokens": null,
  "userId": null,
} satisfies UsageLogResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageLogResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


