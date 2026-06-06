
# UserResponse

Response model for user information.

## Properties

Name | Type
------------ | -------------
`alias` | string
`blocked` | boolean
`budgetId` | string
`budgetStartedAt` | string
`createdAt` | string
`metadata` | { [key: string]: any; }
`nextBudgetResetAt` | string
`reserved` | number
`spend` | number
`updatedAt` | string
`userId` | string

## Example

```typescript
import type { UserResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "alias": null,
  "blocked": null,
  "budgetId": null,
  "budgetStartedAt": null,
  "createdAt": null,
  "metadata": null,
  "nextBudgetResetAt": null,
  "reserved": null,
  "spend": null,
  "updatedAt": null,
  "userId": null,
} satisfies UserResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


