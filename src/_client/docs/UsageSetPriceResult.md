
# UsageSetPriceResult

Outcome of a manual repricing pass.  ``matched`` imported rows were recomputed; ``updated`` had their stored cost changed and ``unchanged`` already matched the recomputed value.

## Properties

Name | Type
------------ | -------------
`matched` | number
`unchanged` | number
`updated` | number

## Example

```typescript
import type { UsageSetPriceResult } from ''

// TODO: Update the object below with actual values
const example = {
  "matched": null,
  "unchanged": null,
  "updated": null,
} satisfies UsageSetPriceResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageSetPriceResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


