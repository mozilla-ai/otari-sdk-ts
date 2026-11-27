
# SubagentSavingsPublic

What the subagent router saved in a window, within the caller\'s scope.

## Properties

Name | Type
------------ | -------------
`byAgentType` | [Array&lt;SavingsByAgentType&gt;](SavingsByAgentType.md)
`bySwap` | [Array&lt;SavingsBySwap&gt;](SavingsBySwap.md)
`estimated` | [SavingsAmounts](SavingsAmounts.md)
`measured` | [SavingsAmounts](SavingsAmounts.md)
`recommenderAvailable` | boolean
`series` | [Array&lt;SubagentSavingsPoint&gt;](SubagentSavingsPoint.md)
`totals` | [SubagentSavingsTotals](SubagentSavingsTotals.md)

## Example

```typescript
import type { SubagentSavingsPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "byAgentType": null,
  "bySwap": null,
  "estimated": null,
  "measured": null,
  "recommenderAvailable": null,
  "series": null,
  "totals": null,
} satisfies SubagentSavingsPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubagentSavingsPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


