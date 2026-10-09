
# OrgWebSearchKeyPublic

One key as the API shows it: never the key itself, only ``last4``.

## Properties

Name | Type
------------ | -------------
`archivedAt` | Date
`createdAt` | Date
`id` | string
`isOrgDefault` | boolean
`last4` | string
`name` | string
`organizationId` | string
`provider` | string
`updatedAt` | Date
`usable` | boolean

## Example

```typescript
import type { OrgWebSearchKeyPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "archivedAt": null,
  "createdAt": null,
  "id": null,
  "isOrgDefault": null,
  "last4": null,
  "name": null,
  "organizationId": null,
  "provider": null,
  "updatedAt": null,
  "usable": null,
} satisfies OrgWebSearchKeyPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrgWebSearchKeyPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


