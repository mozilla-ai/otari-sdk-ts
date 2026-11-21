
# SsoSessionPublic

A dashboard session minted by signing in through an organization\'s own connection.

## Properties

Name | Type
------------ | -------------
`activeOrganizationId` | string
`expiresAt` | Date
`passwordRemoved` | boolean
`userId` | string

## Example

```typescript
import type { SsoSessionPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "activeOrganizationId": null,
  "expiresAt": null,
  "passwordRemoved": null,
  "userId": null,
} satisfies SsoSessionPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SsoSessionPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


