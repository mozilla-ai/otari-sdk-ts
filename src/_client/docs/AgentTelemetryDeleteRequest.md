
# AgentTelemetryDeleteRequest

Selection of agent_telemetry rows to delete.

## Properties

Name | Type
------------ | -------------
`apiKeyId` | [ApiKeyId](ApiKeyId.md)
`byFilter` | boolean
`endDate` | Date
`ids` | Array&lt;string&gt;
`name` | string
`startDate` | Date
`userId` | [UserId](UserId.md)

## Example

```typescript
import type { AgentTelemetryDeleteRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiKeyId": null,
  "byFilter": null,
  "endDate": null,
  "ids": null,
  "name": null,
  "startDate": null,
  "userId": null,
} satisfies AgentTelemetryDeleteRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentTelemetryDeleteRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


