
# HostedProviderTestRequest

Credentials to try against a provider without storing them.  The fields the create body takes. ``name`` naming an existing stored provider lets a field left out fall back to what it stores, so an edit form can test without re-entering the key; pointing the stored key at another origin still needs the key typed again, as an update does.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`clientArgs` | { [key: string]: any; }
`name` | string
`provider` | string

## Example

```typescript
import type { HostedProviderTestRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "clientArgs": null,
  "name": null,
  "provider": null,
} satisfies HostedProviderTestRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedProviderTestRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


