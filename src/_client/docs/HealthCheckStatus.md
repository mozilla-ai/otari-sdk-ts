
# HealthCheckStatus

The Health page: settings, the run in progress, and the latest finished run by provider.

## Properties

Name | Type
------------ | -------------
`lastRun` | [HealthCheckRunPublic](HealthCheckRunPublic.md)
`providers` | [Array&lt;ProviderHealthSummary&gt;](ProviderHealthSummary.md)
`results` | [Array&lt;HealthCheckResultPublic&gt;](HealthCheckResultPublic.md)
`running` | [HealthCheckRunPublic](HealthCheckRunPublic.md)
`settings` | [HealthCheckSettingsPublic](HealthCheckSettingsPublic.md)

## Example

```typescript
import type { HealthCheckStatus } from ''

// TODO: Update the object below with actual values
const example = {
  "lastRun": null,
  "providers": null,
  "results": null,
  "running": null,
  "settings": null,
} satisfies HealthCheckStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HealthCheckStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


