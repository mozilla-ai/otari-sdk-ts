
# BudgetResponse

Response model for budget information.  ``max_budget`` is the per-user spending limit, and multiple users can share one budget, so the usage rollup is an aggregate over the users assigned to this budget: how many there are and their combined ``spend`` / ``reserved``. Assigning users to a budget is done through the users API (dashboard support lands with user management), so a fresh gateway reports zeros here.

## Properties

Name | Type
------------ | -------------
`budgetDurationSec` | number
`budgetId` | string
`createdAt` | string
`maxBudget` | number
`name` | string
`totalReserved` | number
`totalSpend` | number
`updatedAt` | string
`userCount` | number

## Example

```typescript
import type { BudgetResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetDurationSec": null,
  "budgetId": null,
  "createdAt": null,
  "maxBudget": null,
  "name": null,
  "totalReserved": null,
  "totalSpend": null,
  "updatedAt": null,
  "userCount": null,
} satisfies BudgetResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BudgetResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


