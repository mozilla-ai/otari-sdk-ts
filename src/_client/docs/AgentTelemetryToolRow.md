
# AgentTelemetryToolRow

Tool call volume for one tool. ``tool`` is null for a call with no name.

## Properties

Name | Type
------------ | -------------
`calls` | number
`tool` | string

## Example

```typescript
import type { AgentTelemetryToolRow } from ''

// TODO: Update the object below with actual values
const example = {
  "calls": null,
  "tool": null,
} satisfies AgentTelemetryToolRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentTelemetryToolRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


