
# AutomaticFallbacksResponse

The automatic fallbacks the caller\'s organization used.

## Properties

Name | Type
------------ | -------------
`models` | [Array&lt;AutomaticFallbackPublic&gt;](AutomaticFallbackPublic.md)
`windowDays` | number

## Example

```typescript
import type { AutomaticFallbacksResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "models": null,
  "windowDays": null,
} satisfies AutomaticFallbacksResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AutomaticFallbacksResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


