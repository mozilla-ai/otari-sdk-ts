
# UpdateBudgetRequest

Request model for updating a budget.

## Properties

Name | Type
------------ | -------------
`budgetDurationSec` | number
`maxBudget` | number

## Example

```typescript
import type { UpdateBudgetRequest } from 'otari-control-plane'

// TODO: Update the object below with actual values
const example = {
  "budgetDurationSec": null,
  "maxBudget": null,
} satisfies UpdateBudgetRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateBudgetRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


