
# HealthCheckSettingsPublic

Whether the checks run, how often, and what they send.

## Properties

Name | Type
------------ | -------------
`alertEmails` | Array&lt;string&gt;
`intervalMinutes` | number
`maxTokens` | number
`nextRunAt` | Date
`prompt` | string
`reasoningEveryRuns` | number
`reasoningMaxTokens` | number
`runRequested` | boolean
`scheduleEnabled` | boolean

## Example

```typescript
import type { HealthCheckSettingsPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "alertEmails": null,
  "intervalMinutes": null,
  "maxTokens": null,
  "nextRunAt": null,
  "prompt": null,
  "reasoningEveryRuns": null,
  "reasoningMaxTokens": null,
  "runRequested": null,
  "scheduleEnabled": null,
} satisfies HealthCheckSettingsPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HealthCheckSettingsPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


