
# AgentTelemetrySeriesPoint

One UTC time bucket of outcomes, behavior, and the spend beside them.  A cumulative series\' increment is attributed to the bucket of the later point of each consecutive pair, so a bucket reports the growth observed inside it.

## Properties

Name | Type
------------ | -------------
`activeTime` | number
`apiErrors` | number
`bucketStart` | string
`commits` | number
`cost` | number
`linesOfCode` | number
`pullRequests` | number
`toolCalls` | number
`turns` | number

## Example

```typescript
import type { AgentTelemetrySeriesPoint } from ''

// TODO: Update the object below with actual values
const example = {
  "activeTime": null,
  "apiErrors": null,
  "bucketStart": null,
  "commits": null,
  "cost": null,
  "linesOfCode": null,
  "pullRequests": null,
  "toolCalls": null,
  "turns": null,
} satisfies AgentTelemetrySeriesPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentTelemetrySeriesPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


