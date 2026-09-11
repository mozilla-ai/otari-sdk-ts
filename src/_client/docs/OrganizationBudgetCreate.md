
# OrganizationBudgetCreate

Create one budget owned by the caller\'s organization.

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
import type { OrganizationBudgetCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetDurationSec": null,
  "maxBudget": null,
  "name": null,
  "requestLimit": null,
  "resetAlignment": null,
  "tokenLimit": null,
} satisfies OrganizationBudgetCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationBudgetCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


