
# TestProviderRequest

Credentials to test before saving (from the add-provider form).

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`clientArgs` | { [key: string]: any; }
`instance` | string
`providerType` | string

## Example

```typescript
import type { TestProviderRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "clientArgs": null,
  "instance": null,
  "providerType": null,
} satisfies TestProviderRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TestProviderRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


