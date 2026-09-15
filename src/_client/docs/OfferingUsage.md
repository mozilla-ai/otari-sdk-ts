
# OfferingUsage

What the viewer\'s organization actually paid for one offering, last 30 days.  The listed rate is what a token costs; this is what the tokens cost, which is lower wherever prompt caching hit. Absent for a visitor and for an offering the organization never called.

## Properties

Name | Type
------------ | -------------
`cacheHitRate` | number
`cacheReadTokens` | number
`effectivePricePerMillion` | number
`requests` | number
`spendUsd` | number
`totalTokens` | number

## Example

```typescript
import type { OfferingUsage } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheHitRate": null,
  "cacheReadTokens": null,
  "effectivePricePerMillion": null,
  "requests": null,
  "spendUsd": null,
  "totalTokens": null,
} satisfies OfferingUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OfferingUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


