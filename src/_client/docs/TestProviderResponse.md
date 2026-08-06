
# TestProviderResponse

Result of a live provider connection test.

## Properties

Name | Type
------------ | -------------
`discoveryUnsupported` | boolean
`error` | string
`modelCount` | number
`ok` | boolean

## Example

```typescript
import type { TestProviderResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "discoveryUnsupported": null,
  "error": null,
  "modelCount": null,
  "ok": null,
} satisfies TestProviderResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TestProviderResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


