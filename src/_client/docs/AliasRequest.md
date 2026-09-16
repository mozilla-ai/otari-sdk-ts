
# AliasRequest

Request to create or update an alias.

## Properties

Name | Type
------------ | -------------
`name` | string
`target` | string
`userId` | string
`workspaceId` | string

## Example

```typescript
import type { AliasRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "target": null,
  "userId": null,
  "workspaceId": null,
} satisfies AliasRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AliasRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


