
# RatesDocumentInput

A ``cost`` block on the wire: each other key is a modality (``text``, ``image``, ``audio``, ``video``).

## Properties

Name | Type
------------ | -------------
`multipliers` | [Array&lt;RateMultiplier&gt;](RateMultiplier.md)
`webSearch` | [UnitRateInput](UnitRateInput.md)

## Example

```typescript
import type { RatesDocumentInput } from ''

// TODO: Update the object below with actual values
const example = {
  "multipliers": null,
  "webSearch": null,
} satisfies RatesDocumentInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RatesDocumentInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


