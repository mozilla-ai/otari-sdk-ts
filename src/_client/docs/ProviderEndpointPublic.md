
# ProviderEndpointPublic

The API-facing shape. Never carries the key, only whether one is set.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`createdAt` | Date
`defaultParams` | { [key: string]: any; }
`id` | string
`last4` | string
`name` | string
`provider` | string
`updatedAt` | Date
`userId` | string
`workspaceId` | string

## Example

```typescript
import type { ProviderEndpointPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "createdAt": null,
  "defaultParams": null,
  "id": null,
  "last4": null,
  "name": null,
  "provider": null,
  "updatedAt": null,
  "userId": null,
  "workspaceId": null,
} satisfies ProviderEndpointPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProviderEndpointPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


