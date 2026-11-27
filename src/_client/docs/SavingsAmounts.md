
# SavingsAmounts

What a group of subagent decisions comes to, in USD.  The two costs sum only the decisions whose outcome is priced on both sides, which `measured` and `estimated` count. `router_cost` sums every decision in the group, so `net_saved` can be negative.

## Properties

Name | Type
------------ | -------------
`actualCost` | number
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
import type { SavingsAmounts } from ''

// TODO: Update the object below with actual values
const example = {
  "actualCost": null,
  "baselineCost": null,
  "decisions": null,
  "estimated": null,
  "grossSaved": null,
  "measured": null,
  "netSaved": null,
  "routerCost": null,
  "withOutcome": null,
} satisfies SavingsAmounts

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SavingsAmounts
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


