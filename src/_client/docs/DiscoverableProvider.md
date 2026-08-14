
# DiscoverableProvider

One provider instance\'s discovery result.

## Properties

Name | Type
------------ | -------------
`checkedAt` | string
`discoveryUnsupported` | boolean
`error` | string
`models` | [Array&lt;DiscoverableModel&gt;](DiscoverableModel.md)
`ok` | boolean
`provider` | string

## Example

```typescript
import type { DiscoverableProvider } from ''

// TODO: Update the object below with actual values
const example = {
  "checkedAt": null,
  "discoveryUnsupported": null,
  "error": null,
  "models": null,
  "ok": null,
  "provider": null,
} satisfies DiscoverableProvider

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoverableProvider
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


