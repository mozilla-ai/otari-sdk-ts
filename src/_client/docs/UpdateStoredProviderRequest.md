
# UpdateStoredProviderRequest

Update a stored provider. Omitted fields are unchanged; ``api_key`` rotates in place.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`clientArgs` | { [key: string]: any; }
`expectedUpdatedAt` | string
`providerType` | string

## Example

```typescript
import type { UpdateStoredProviderRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "clientArgs": null,
  "expectedUpdatedAt": null,
  "providerType": null,
} satisfies UpdateStoredProviderRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateStoredProviderRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


