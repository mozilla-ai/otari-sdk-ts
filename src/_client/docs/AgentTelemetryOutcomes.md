
# AgentTelemetryOutcomes

How much work the agent produced inside the window.  Each value is the read-time increment for its metric: a delta series is summed, a cumulative one is diffed per series generation, so a counter that is re-reported in full on every export is never counted twice. ``lines_of_code`` sums the added and removed series, which are stored separately. ``active_time`` is in seconds, as the agent reports it.

## Properties

Name | Type
------------ | -------------
`activeTime` | number
`commits` | number
`linesOfCode` | number
`pullRequests` | number

## Example

```typescript
import type { AgentTelemetryOutcomes } from ''

// TODO: Update the object below with actual values
const example = {
  "activeTime": null,
  "commits": null,
  "linesOfCode": null,
  "pullRequests": null,
} satisfies AgentTelemetryOutcomes

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentTelemetryOutcomes
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


