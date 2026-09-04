
# OrganizationBudgetPublic

One of the organization\'s budgets, and how much of its own config names it.  Carries no spend rollup. ``BudgetResponse`` on the deployment surface sums ``users.spend`` over the gateway\'s ``users`` table, which is deployment-wide and has no tenancy column, so the same figure here would be a cross-tenant read. What an organization\'s own spend is, is a question for Usage.  ``ceiling_count`` is the organization-relevant fact instead: how many of its ceilings this budget currently holds, which is what makes a delete refuse.

## Properties

Name | Type
------------ | -------------
`budgetDurationSec` | number
`budgetId` | string
`ceilingCount` | number
`createdAt` | string
`maxBudget` | number
`name` | string
`organizationId` | string
`requestLimit` | number
`resetAlignment` | string
`tokenLimit` | number
`updatedAt` | string

## Example

```typescript
import type { OrganizationBudgetPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetDurationSec": null,
  "budgetId": null,
  "ceilingCount": null,
  "createdAt": null,
  "maxBudget": null,
  "name": null,
  "organizationId": null,
  "requestLimit": null,
  "resetAlignment": null,
  "tokenLimit": null,
  "updatedAt": null,
} satisfies OrganizationBudgetPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationBudgetPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


