
# AgentTelemetryBehavior

Counts from the behavioral events already captured on the logs signal.

## Properties

Name | Type
------------ | -------------
`apiErrors` | number
`byTool` | [Array&lt;AgentTelemetryToolRow&gt;](AgentTelemetryToolRow.md)
`sessions` | number
`toolAccepts` | number
`toolCalls` | number
`toolRejects` | number
`turns` | number

## Example

```typescript
import type { AgentTelemetryBehavior } from ''

// TODO: Update the object below with actual values
const example = {
  "apiErrors": null,
  "byTool": null,
  "sessions": null,
  "toolAccepts": null,
  "toolCalls": null,
  "toolRejects": null,
  "turns": null,
} satisfies AgentTelemetryBehavior

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentTelemetryBehavior
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


