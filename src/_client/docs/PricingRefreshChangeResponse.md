
# PricingRefreshChangeResponse

One default model price changed by a pending refresh.

## Properties

Name | Type
------------ | -------------
`change` | string
`modelKey` | string

## Example

```typescript
import type { PricingRefreshChangeResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "change": null,
  "modelKey": null,
} satisfies PricingRefreshChangeResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PricingRefreshChangeResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


