
# CatalogProviderSummary

One provider instance offering at least one model the caller may see.

## Properties

Name | Type
------------ | -------------
`displayName` | string
`modelCount` | number
`name` | string
`privacyUrl` | string
`provider` | string
`termsUrl` | string

## Example

```typescript
import type { CatalogProviderSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "displayName": null,
  "modelCount": null,
  "name": null,
  "privacyUrl": null,
  "provider": null,
  "termsUrl": null,
} satisfies CatalogProviderSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogProviderSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


