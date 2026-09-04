
# OrganizationScopedBudgetUpdate

Relabel a ceiling, or point it at a different budget of this organization\'s.  The scope and the provider narrowing are not editable, for the reason ``PATCH /v1/scoped-budgets/{id}`` gives: changing either moves the ceiling to a different identity while carrying its spend, which is a delete and a create, not an update.

## Properties

Name | Type
------------ | -------------
`budgetId` | string
`name` | string

## Example

```typescript
import type { OrganizationScopedBudgetUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetId": null,
  "name": null,
} satisfies OrganizationScopedBudgetUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationScopedBudgetUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


