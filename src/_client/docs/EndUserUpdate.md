
# EndUserUpdate

Block, unblock or move an end user. An omitted field is left as it is.

## Properties

Name | Type
------------ | -------------
`blocked` | boolean
`budgetId` | string

## Example

```typescript
import type { EndUserUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "blocked": null,
  "budgetId": null,
} satisfies EndUserUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EndUserUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


