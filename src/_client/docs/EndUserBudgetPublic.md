
# EndUserBudgetPublic

A budget a service key may put its end users on, and how many of them are on it.

## Properties

Name | Type
------------ | -------------
`blockedEndUserCount` | number
`budgetId` | string
`endUserCount` | number
`isDefault` | boolean

## Example

```typescript
import type { EndUserBudgetPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "blockedEndUserCount": null,
  "budgetId": null,
  "endUserCount": null,
  "isDefault": null,
} satisfies EndUserBudgetPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EndUserBudgetPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


