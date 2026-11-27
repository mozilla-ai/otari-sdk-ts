
# AccessTokenPublic


## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`expiresAt` | Date
`id` | string
`lastUsedAt` | Date
`name` | string
`organizationId` | string
`tokenSuffix` | string

## Example

```typescript
import type { AccessTokenPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "expiresAt": null,
  "id": null,
  "lastUsedAt": null,
  "name": null,
  "organizationId": null,
  "tokenSuffix": null,
} satisfies AccessTokenPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccessTokenPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


