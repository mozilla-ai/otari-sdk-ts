
# OrgProviderAvailableModelsPublic

What the provider says it serves on this key\'s stored credential.  Failure is a field rather than a status: an unreachable upstream, or a provider with no model listing, is an answer about the provider rather than about this request, and the form still has to render (with a plain text box) when the list cannot be fetched.

## Properties

Name | Type
------------ | -------------
`discoveryUnsupported` | boolean
`error` | string
`models` | Array&lt;string&gt;
`provider` | string

## Example

```typescript
import type { OrgProviderAvailableModelsPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "discoveryUnsupported": null,
  "error": null,
  "models": null,
  "provider": null,
} satisfies OrgProviderAvailableModelsPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrgProviderAvailableModelsPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


