
# OfferingSpeedInfo

How fast one offering answered the viewer\'s organization over the last 7 days.  Read from the organization\'s own requests, so it describes that traffic rather than the provider in general: an offering that served the long prompts looks slower. Only a request a routing plan\'s first candidate served counts, and only one that ran no gateway tool.

## Properties

Name | Type
------------ | -------------
`outputTokensPerSecondP50` | number
`outputTokensPerSecondP95` | number
`throughputSamples` | number
`ttftMsP50` | number
`ttftMsP95` | number
`ttftSamples` | number

## Example

```typescript
import type { OfferingSpeedInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "outputTokensPerSecondP50": null,
  "outputTokensPerSecondP95": null,
  "throughputSamples": null,
  "ttftMsP50": null,
  "ttftMsP95": null,
  "ttftSamples": null,
} satisfies OfferingSpeedInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OfferingSpeedInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


