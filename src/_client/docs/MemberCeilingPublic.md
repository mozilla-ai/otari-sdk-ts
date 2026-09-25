
# MemberCeilingPublic

The spend ceiling on one workspace membership, as the roster reports it.  Three fields rather than the whole ``scoped_budgets`` row: the figure the roster prints, the budget its editor picks, and the id that edit writes to.

## Properties

Name | Type
------------ | -------------
`budgetId` | string
`id` | string
`maxBudget` | number

## Example

```typescript
import type { MemberCeilingPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetId": null,
  "id": null,
  "maxBudget": null,
} satisfies MemberCeilingPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MemberCeilingPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


