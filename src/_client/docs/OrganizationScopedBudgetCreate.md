
# OrganizationScopedBudgetCreate

Attach one of the organization\'s budgets to a scope inside it.

## Properties

Name | Type
------------ | -------------
`budgetId` | string
`name` | string
`providerKeyId` | string
`scopeId` | string
`scopeType` | string

## Example

```typescript
import type { OrganizationScopedBudgetCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetId": null,
  "name": null,
  "providerKeyId": null,
  "scopeId": null,
  "scopeType": null,
} satisfies OrganizationScopedBudgetCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationScopedBudgetCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


