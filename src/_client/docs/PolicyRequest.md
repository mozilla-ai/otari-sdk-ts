
# PolicyRequest

Request to create or update a routing policy.

## Properties

Name | Type
------------ | -------------
`name` | string
`renameFrom` | string
`spec` | { [key: string]: any; }
`userId` | string
`workspaceId` | string

## Example

```typescript
import type { PolicyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "renameFrom": null,
  "spec": null,
  "userId": null,
  "workspaceId": null,
} satisfies PolicyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PolicyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


