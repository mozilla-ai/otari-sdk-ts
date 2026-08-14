
# AgentTelemetryGroupedSeries

A per-group row-volume series, for stacked charting.

## Properties

Name | Type
------------ | -------------
`bucket` | string
`endDate` | string
`groupBy` | string
`groups` | [Array&lt;AgentTelemetryGroupRow&gt;](AgentTelemetryGroupRow.md)
`points` | [Array&lt;AgentTelemetryGroupedSeriesPoint&gt;](AgentTelemetryGroupedSeriesPoint.md)
`startDate` | string

## Example

```typescript
import type { AgentTelemetryGroupedSeries } from ''

// TODO: Update the object below with actual values
const example = {
  "bucket": null,
  "endDate": null,
  "groupBy": null,
  "groups": null,
  "points": null,
  "startDate": null,
} satisfies AgentTelemetryGroupedSeries

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentTelemetryGroupedSeries
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


