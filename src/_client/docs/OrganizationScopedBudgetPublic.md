
# OrganizationScopedBudgetPublic

One ceiling inside the organization, and the figures it enforces.  The limit and the period are read through the budget rather than stored here, and carried on the wire so a page can render a ceiling without fetching every budget to resolve one id. Same reasoning as ``ScopedBudgetResponse``, whose shape this deliberately mirrors.

## Properties

Name | Type
------------ | -------------
`budgetDurationSec` | number
`budgetId` | string
`createdAt` | string
`currentRequests` | number
`currentSpend` | number
`currentTokens` | number
`id` | string
`manageable` | boolean
`maxBudget` | number
`name` | string
`periodEnd` | string
`periodStart` | string
`providerKeyId` | string
`requestLimit` | number
`reservedRequests` | number
`reservedSpend` | number
`reservedTokens` | number
`resetAlignment` | string
`scopeId` | string
`scopeType` | string
`tokenLimit` | number
`updatedAt` | string

## Example

```typescript
import type { OrganizationScopedBudgetPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetDurationSec": null,
  "budgetId": null,
  "createdAt": null,
  "currentRequests": null,
  "currentSpend": null,
  "currentTokens": null,
  "id": null,
  "manageable": null,
  "maxBudget": null,
  "name": null,
  "periodEnd": null,
  "periodStart": null,
  "providerKeyId": null,
  "requestLimit": null,
  "reservedRequests": null,
  "reservedSpend": null,
  "reservedTokens": null,
  "resetAlignment": null,
  "scopeId": null,
  "scopeType": null,
  "tokenLimit": null,
  "updatedAt": null,
} satisfies OrganizationScopedBudgetPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationScopedBudgetPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


