
# OrgProviderKeyPublic

The API-facing shape. Never carries the key, only whether one is set.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`archivedAt` | Date
`clientArgs` | { [key: string]: any; }
`createdAt` | Date
`id` | string
`isOrgDefault` | boolean
`last4` | string
`name` | string
`organizationId` | string
`provider` | string
`updatedAt` | Date

## Example

```typescript
import type { OrgProviderKeyPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "archivedAt": null,
  "clientArgs": null,
  "createdAt": null,
  "id": null,
  "isOrgDefault": null,
  "last4": null,
  "name": null,
  "organizationId": null,
  "provider": null,
  "updatedAt": null,
} satisfies OrgProviderKeyPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrgProviderKeyPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


