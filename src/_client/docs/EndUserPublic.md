
# EndUserPublic

An end user of a service key, addressed by the id the service named it by.

## Properties

Name | Type
------------ | -------------
`blocked` | boolean
`budgetId` | string
`budgetStartedAt` | string
`createdAt` | string
`currentRequests` | number
`currentTokens` | number
`externalId` | string
`nextBudgetResetAt` | string
`ownerUserId` | string
`reserved` | number
`spend` | number
`userId` | string

## Example

```typescript
import type { EndUserPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "blocked": null,
  "budgetId": null,
  "budgetStartedAt": null,
  "createdAt": null,
  "currentRequests": null,
  "currentTokens": null,
  "externalId": null,
  "nextBudgetResetAt": null,
  "ownerUserId": null,
  "reserved": null,
  "spend": null,
  "userId": null,
} satisfies EndUserPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EndUserPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


