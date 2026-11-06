
# HostedModelUpdateRequest

Reprice an offered model, toggle whether it is served, or both.  A price is the input/output pair or nothing: sending the pair writes a new pricing version, and the cache rates then follow ``POST /pricing``\'s own semantics (a field the caller omits inherits the most recent stored value, an explicit null clears it). An omitted ``unit`` carries the stored one forward. ``enabled`` travels alone freely, so a toggle never re-sends rates it did not change.

## Properties

Name | Type
------------ | -------------
`cacheReadPricePerMillion` | number
`cacheWritePricePerMillion` | number
`enabled` | boolean
`inputPricePerMillion` | number
`outputPricePerMillion` | number
`unit` | string

## Example

```typescript
import type { HostedModelUpdateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadPricePerMillion": null,
  "cacheWritePricePerMillion": null,
  "enabled": null,
  "inputPricePerMillion": null,
  "outputPricePerMillion": null,
  "unit": null,
} satisfies HostedModelUpdateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedModelUpdateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


