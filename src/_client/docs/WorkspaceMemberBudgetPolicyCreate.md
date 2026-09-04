
# WorkspaceMemberBudgetPolicyCreate

Request body for creating a default.

## Properties

Name | Type
------------ | -------------
`budgetId` | string
`providerKeyId` | string

## Example

```typescript
import type { WorkspaceMemberBudgetPolicyCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetId": null,
  "providerKeyId": null,
} satisfies WorkspaceMemberBudgetPolicyCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMemberBudgetPolicyCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


