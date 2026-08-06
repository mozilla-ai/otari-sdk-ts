
# BudgetResetLogResponse

Response model for one budget reset event (per user).

## Properties

Name | Type
------------ | -------------
`budgetId` | string
`id` | number
`nextResetAt` | string
`previousSpend` | number
`resetAt` | string
`userId` | string

## Example

```typescript
import type { BudgetResetLogResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetId": null,
  "id": null,
  "nextResetAt": null,
  "previousSpend": null,
  "resetAt": null,
  "userId": null,
} satisfies BudgetResetLogResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BudgetResetLogResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


