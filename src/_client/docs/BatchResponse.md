
# BatchResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`completionWindow` | string
`createdAt` | number
`endpoint` | string
`inputFileId` | string
`object` | string
`status` | string
`cancelledAt` | number
`cancellingAt` | number
`completedAt` | number
`errorFileId` | string
`errors` | [BATCHErrors](BATCHErrors.md)
`expiredAt` | number
`expiresAt` | number
`failedAt` | number
`finalizingAt` | number
`inProgressAt` | number
`metadata` | { [key: string]: string; }
`model` | string
`outputFileId` | string
`requestCounts` | [BATCHBatchRequestCounts](BATCHBatchRequestCounts.md)
`usage` | [BATCHBatchUsage](BATCHBatchUsage.md)
`provider` | string

## Example

```typescript
import type { BatchResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "completionWindow": null,
  "createdAt": null,
  "endpoint": null,
  "inputFileId": null,
  "object": null,
  "status": null,
  "cancelledAt": null,
  "cancellingAt": null,
  "completedAt": null,
  "errorFileId": null,
  "errors": null,
  "expiredAt": null,
  "expiresAt": null,
  "failedAt": null,
  "finalizingAt": null,
  "inProgressAt": null,
  "metadata": null,
  "model": null,
  "outputFileId": null,
  "requestCounts": null,
  "usage": null,
  "provider": null,
} satisfies BatchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


