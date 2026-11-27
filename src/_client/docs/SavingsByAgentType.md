
# SavingsByAgentType

One subagent type.

## Properties

Name | Type
------------ | -------------
`actualCost` | number
`agentType` | string
`baselineCost` | number
`decisions` | number
`estimated` | number
`grossSaved` | number
`measured` | number
`netSaved` | number
`routerCost` | number
`withOutcome` | number

## Example

```typescript
import type { SavingsByAgentType } from ''

// TODO: Update the object below with actual values
const example = {
  "actualCost": null,
  "agentType": null,
  "baselineCost": null,
  "decisions": null,
  "estimated": null,
  "grossSaved": null,
  "measured": null,
  "netSaved": null,
  "routerCost": null,
  "withOutcome": null,
} satisfies SavingsByAgentType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SavingsByAgentType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


