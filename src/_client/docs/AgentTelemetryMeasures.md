
# AgentTelemetryMeasures

Cost and quality per unit of work. Each is null when its denominator is zero.  ``edit_acceptance_rate`` and ``tool_acceptance_rate`` are the same quantity today, both derived from the ``tool_decision`` event: the agent\'s own ``code_edit_tool.decision`` metric is deliberately never stored, since ``tool_decision`` already carries that accept/reject signal. Both names are reported so a caller reading either vocabulary gets the right number.

## Properties

Name | Type
------------ | -------------
`costPerCommit` | number
`costPerLine` | number
`costPerPullRequest` | number
`editAcceptanceRate` | number
`errorRate` | number
`spendPerActiveHour` | number
`toolAcceptanceRate` | number
`turnsPerSession` | number

## Example

```typescript
import type { AgentTelemetryMeasures } from ''

// TODO: Update the object below with actual values
const example = {
  "costPerCommit": null,
  "costPerLine": null,
  "costPerPullRequest": null,
  "editAcceptanceRate": null,
  "errorRate": null,
  "spendPerActiveHour": null,
  "toolAcceptanceRate": null,
  "turnsPerSession": null,
} satisfies AgentTelemetryMeasures

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentTelemetryMeasures
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


