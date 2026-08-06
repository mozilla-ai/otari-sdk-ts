
# UsageToolRow

Spend and volume for one gateway-run tool inside the window.  ``calls`` counts billable calls, not requests: one request can run a tool several times, which is the whole reason a per-tool view exists. ``errors`` counts calls that failed and were therefore never billed. ``requests`` is how many requests ran the tool at least once, so the number reconciles with the Activity list when the same filter is applied there.

## Properties

Name | Type
------------ | -------------
`calls` | number
`cost` | number
`errors` | number
`requests` | number
`tool` | string

## Example

```typescript
import type { UsageToolRow } from ''

// TODO: Update the object below with actual values
const example = {
  "calls": null,
  "cost": null,
  "errors": null,
  "requests": null,
  "tool": null,
} satisfies UsageToolRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageToolRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


