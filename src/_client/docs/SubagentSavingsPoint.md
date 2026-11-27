
# SubagentSavingsPoint

One time bucket, by when the recommendation was made.

## Properties

Name | Type
------------ | -------------
`actualCost` | number
`baselineCost` | number
`bucketStart` | string
`decisions` | number
`estimated` | number
`grossSaved` | number
`measured` | number
`netSaved` | number
`routerCost` | number
`withOutcome` | number

## Example

```typescript
import type { SubagentSavingsPoint } from ''

// TODO: Update the object below with actual values
const example = {
  "actualCost": null,
  "baselineCost": null,
  "bucketStart": null,
  "decisions": null,
  "estimated": null,
  "grossSaved": null,
  "measured": null,
  "netSaved": null,
  "routerCost": null,
  "withOutcome": null,
} satisfies SubagentSavingsPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubagentSavingsPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


