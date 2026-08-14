
# AgentTelemetryGroupedSeriesPoint

One (bucket, group) cell: how many rows that group recorded in that bucket.

## Properties

Name | Type
------------ | -------------
`bucketStart` | string
`isOther` | boolean
`key` | string
`rows` | number

## Example

```typescript
import type { AgentTelemetryGroupedSeriesPoint } from ''

// TODO: Update the object below with actual values
const example = {
  "bucketStart": null,
  "isOther": null,
  "key": null,
  "rows": null,
} satisfies AgentTelemetryGroupedSeriesPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentTelemetryGroupedSeriesPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


