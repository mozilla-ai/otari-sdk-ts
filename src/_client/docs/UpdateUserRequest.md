
# UpdateUserRequest

Request model for updating a user.

## Properties

Name | Type
------------ | -------------
`alias` | string
`blocked` | boolean
`budgetId` | string
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { UpdateUserRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "alias": null,
  "blocked": null,
  "budgetId": null,
  "metadata": null,
} satisfies UpdateUserRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateUserRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


