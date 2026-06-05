
# BudgetResponse

Response model for budget information.

## Properties

Name | Type
------------ | -------------
`budgetDurationSec` | number
`budgetId` | string
`createdAt` | string
`maxBudget` | number
`updatedAt` | string

## Example

```typescript
import type { BudgetResponse } from 'otari-control-plane'

// TODO: Update the object below with actual values
const example = {
  "budgetDurationSec": null,
  "budgetId": null,
  "createdAt": null,
  "maxBudget": null,
  "updatedAt": null,
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


