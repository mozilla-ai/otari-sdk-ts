
# CreateBudgetRequest

Request model for creating a new budget.

## Properties

Name | Type
------------ | -------------
`budgetDurationSec` | number
`maxBudget` | number

## Example

```typescript
import type { CreateBudgetRequest } from 'otari-control-plane'

// TODO: Update the object below with actual values
const example = {
  "budgetDurationSec": null,
  "maxBudget": null,
} satisfies CreateBudgetRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateBudgetRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


