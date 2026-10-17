
# ProviderEndpointCreateRequest

What a caller sends to create an owned endpoint. The key is stored encrypted.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`defaultParams` | { [key: string]: any; }
`name` | string
`provider` | string
`userId` | string
`workspaceId` | string

## Example

```typescript
import type { ProviderEndpointCreateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "defaultParams": null,
  "name": null,
  "provider": null,
  "userId": null,
  "workspaceId": null,
} satisfies ProviderEndpointCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProviderEndpointCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


