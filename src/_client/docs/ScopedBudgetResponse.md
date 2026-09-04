
# ScopedBudgetResponse

One scoped ceiling and its live counters.  Unlike ``/v1/budgets``, the counters are the row\'s own: a scoped ceiling is enforced against ``current_spend + reserved_spend``, so there is no rollup over users to compute.  Every limit, along with ``budget_duration_sec`` and ``reset_alignment``, is read off the budget rather than stored here, and carried on the wire so a caller can render a ceiling without fetching every budget to resolve one id.

## Properties

Name | Type
------------ | -------------
`budgetDurationSec` | number
`budgetId` | string
`createdAt` | string
`currentRequests` | number
`currentSpend` | number
`currentTokens` | number
`id` | string
`maxBudget` | number
`name` | string
`periodEnd` | string
`periodStart` | string
`providerKeyId` | string
`requestLimit` | number
`reservedRequests` | number
`reservedSpend` | number
`reservedTokens` | number
`resetAlignment` | string
`scopeId` | string
`scopeType` | string
`tokenLimit` | number
`updatedAt` | string

## Example

```typescript
import type { ScopedBudgetResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetDurationSec": null,
  "budgetId": null,
  "createdAt": null,
  "currentRequests": null,
  "currentSpend": null,
  "currentTokens": null,
  "id": null,
  "maxBudget": null,
  "name": null,
  "periodEnd": null,
  "periodStart": null,
  "providerKeyId": null,
  "requestLimit": null,
  "reservedRequests": null,
  "reservedSpend": null,
  "reservedTokens": null,
  "resetAlignment": null,
  "scopeId": null,
  "scopeType": null,
  "tokenLimit": null,
  "updatedAt": null,
} satisfies ScopedBudgetResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScopedBudgetResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


