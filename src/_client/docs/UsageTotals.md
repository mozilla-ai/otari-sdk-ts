
# UsageTotals

Grand totals over the filtered window.

## Properties

Name | Type
------------ | -------------
`avgLatencyMs` | number
`billedInputTokens` | number
`billedOutputTokens` | number
`cacheReadTokens` | number
`cacheWrite1hTokens` | number
`cacheWriteTokens` | number
`completionTokens` | number
`cost` | number
`errorCount` | number
`promptTokens` | number
`requestCount` | number
`totalTokens` | number
`unpricedRequests` | number

## Example

```typescript
import type { UsageTotals } from ''

// TODO: Update the object below with actual values
const example = {
  "avgLatencyMs": null,
  "billedInputTokens": null,
  "billedOutputTokens": null,
  "cacheReadTokens": null,
  "cacheWrite1hTokens": null,
  "cacheWriteTokens": null,
  "completionTokens": null,
  "cost": null,
  "errorCount": null,
  "promptTokens": null,
  "requestCount": null,
  "totalTokens": null,
  "unpricedRequests": null,
} satisfies UsageTotals

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageTotals
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


