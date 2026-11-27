
# RateMultiplier

A factor applied to every price, or to the prices it names, when a condition holds.

## Properties

Name | Type
------------ | -------------
`factor` | [Factor](Factor.md)
`when` | { [key: string]: any; }

## Example

```typescript
import type { RateMultiplier } from ''

// TODO: Update the object below with actual values
const example = {
  "factor": null,
  "when": null,
} satisfies RateMultiplier

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RateMultiplier
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


