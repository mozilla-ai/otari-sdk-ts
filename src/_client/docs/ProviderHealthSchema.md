
# ProviderHealthSchema

One provider instance\'s reachability, from the model-discovery test path.

## Properties

Name | Type
------------ | -------------
`checkedAt` | string
`discoveryUnsupported` | boolean
`error` | string
`instance` | string
`modelCount` | number
`ok` | boolean

## Example

```typescript
import type { ProviderHealthSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "checkedAt": null,
  "discoveryUnsupported": null,
  "error": null,
  "instance": null,
  "modelCount": null,
  "ok": null,
} satisfies ProviderHealthSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProviderHealthSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


