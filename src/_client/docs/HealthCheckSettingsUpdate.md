
# HealthCheckSettingsUpdate

Settings to change. An omitted field keeps its value.

## Properties

Name | Type
------------ | -------------
`alertEmails` | any
`intervalMinutes` | number
`maxTokens` | number
`prompt` | string
`reasoningEveryRuns` | number
`reasoningMaxTokens` | number
`scheduleEnabled` | boolean

## Example

```typescript
import type { HealthCheckSettingsUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "alertEmails": null,
  "intervalMinutes": null,
  "maxTokens": null,
  "prompt": null,
  "reasoningEveryRuns": null,
  "reasoningMaxTokens": null,
  "scheduleEnabled": null,
} satisfies HealthCheckSettingsUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HealthCheckSettingsUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


