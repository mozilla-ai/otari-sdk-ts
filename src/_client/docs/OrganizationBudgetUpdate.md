
# OrganizationBudgetUpdate

Replace a budget\'s label, figure and period.  Every field is optional and keyed on ``model_fields_set``, matching ``PATCH /v1/budgets/{id}``\'s own: an *omitted* field is left alone, and an explicit null clears it, so sending ``max_budget: null`` takes a budget back to uncapped, which is what the dashboard\'s dialog does. The period pair is still mutually exclusive, and setting one does not clear the other, which is why :func:`_require_single_period_source` re-checks the *resulting* pair rather than the submitted one.

## Properties

Name | Type
------------ | -------------
`budgetDurationSec` | number
`maxBudget` | number
`name` | string
`requestLimit` | number
`resetAlignment` | string
`tokenLimit` | number

## Example

```typescript
import type { OrganizationBudgetUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetDurationSec": null,
  "maxBudget": null,
  "name": null,
  "requestLimit": null,
  "resetAlignment": null,
  "tokenLimit": null,
} satisfies OrganizationBudgetUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationBudgetUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


