
# AgentTelemetrySummary

Agent outcomes and behavior for the window, joined against recorded spend.

## Properties

Name | Type
------------ | -------------
`behavior` | [AgentTelemetryBehavior](AgentTelemetryBehavior.md)
`bucket` | string
`endDate` | string
`measures` | [AgentTelemetryMeasures](AgentTelemetryMeasures.md)
`outcomes` | [AgentTelemetryOutcomes](AgentTelemetryOutcomes.md)
`series` | [Array&lt;AgentTelemetrySeriesPoint&gt;](AgentTelemetrySeriesPoint.md)
`startDate` | string
`usage` | [AgentTelemetryUsage](AgentTelemetryUsage.md)

## Example

```typescript
import type { AgentTelemetrySummary } from ''

// TODO: Update the object below with actual values
const example = {
  "behavior": null,
  "bucket": null,
  "endDate": null,
  "measures": null,
  "outcomes": null,
  "series": null,
  "startDate": null,
  "usage": null,
} satisfies AgentTelemetrySummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentTelemetrySummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


