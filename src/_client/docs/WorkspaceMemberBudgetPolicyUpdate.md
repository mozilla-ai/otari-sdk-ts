
# WorkspaceMemberBudgetPolicyUpdate

Request body for pointing a default at a different budget.  Members already materialized from this default keep the budget they were given: their ceiling names it directly, and this only changes what a member joining afterwards is handed. Editing the *budget* is the retroactive act, and it moves everyone naming it, in this workspace and outside it.

## Properties

Name | Type
------------ | -------------
`budgetId` | string

## Example

```typescript
import type { WorkspaceMemberBudgetPolicyUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetId": null,
} satisfies WorkspaceMemberBudgetPolicyUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMemberBudgetPolicyUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


