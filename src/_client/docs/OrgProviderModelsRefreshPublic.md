
# OrgProviderModelsRefreshPublic

What a refresh did: what it newly offered, what it repriced, and the list\'s new size.  Failure is a field rather than a status, for the reason ``OrgProviderAvailableModelsPublic`` gives: the list is still standing, and the panel renders the reason beside it.

## Properties

Name | Type
------------ | -------------
`added` | Array&lt;string&gt;
`count` | number
`discoveryUnsupported` | boolean
`error` | string
`repriced` | Array&lt;string&gt;

## Example

```typescript
import type { OrgProviderModelsRefreshPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "added": null,
  "count": null,
  "discoveryUnsupported": null,
  "error": null,
  "repriced": null,
} satisfies OrgProviderModelsRefreshPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrgProviderModelsRefreshPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


