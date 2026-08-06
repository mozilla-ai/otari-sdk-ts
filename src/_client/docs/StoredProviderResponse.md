
# StoredProviderResponse

A runtime-stored provider. The API key is never returned, only ``last4``.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`clientArgs` | { [key: string]: any; }
`createdAt` | string
`decryptable` | boolean
`instance` | string
`last4` | string
`providerType` | string
`updatedAt` | string

## Example

```typescript
import type { StoredProviderResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "clientArgs": null,
  "createdAt": null,
  "decryptable": null,
  "instance": null,
  "last4": null,
  "providerType": null,
  "updatedAt": null,
} satisfies StoredProviderResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StoredProviderResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


