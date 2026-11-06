
# HostedProviderTestPublic

What a connection test found: whether the provider answered, and how many models it lists.  ``discovery_unsupported`` is set for a provider with no model listing, which a test cannot reach that way although it may still serve.

## Properties

Name | Type
------------ | -------------
`discoveryUnsupported` | boolean
`error` | string
`modelCount` | number
`ok` | boolean

## Example

```typescript
import type { HostedProviderTestPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "discoveryUnsupported": null,
  "error": null,
  "modelCount": null,
  "ok": null,
} satisfies HostedProviderTestPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedProviderTestPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


