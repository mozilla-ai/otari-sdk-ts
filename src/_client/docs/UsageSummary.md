
# UsageSummary

Aggregate spend/volume for the Usage & analytics page.  Every breakdown field is always present. One the caller excluded through ``dimensions`` comes back as an empty list, the same shape a window with no matching rows produces, so narrowing the selector never changes the schema.

## Properties

Name | Type
------------ | -------------
`bucket` | string
`byApiKey` | [Array&lt;UsageGroupRow&gt;](UsageGroupRow.md)
`byEndpoint` | [Array&lt;UsageGroupRow&gt;](UsageGroupRow.md)
`byModel` | [Array&lt;UsageGroupRow&gt;](UsageGroupRow.md)
`byProvider` | [Array&lt;UsageGroupRow&gt;](UsageGroupRow.md)
`bySource` | [Array&lt;UsageGroupRow&gt;](UsageGroupRow.md)
`bySourceLabel` | [Array&lt;UsageGroupRow&gt;](UsageGroupRow.md)
`byTool` | [Array&lt;UsageToolRow&gt;](UsageToolRow.md)
`byUser` | [Array&lt;UsageGroupRow&gt;](UsageGroupRow.md)
`endDate` | string
`errorsByStatusCode` | [Array&lt;UsageErrorCodeRow&gt;](UsageErrorCodeRow.md)
`series` | [Array&lt;UsageSeriesPoint&gt;](UsageSeriesPoint.md)
`startDate` | string
`totals` | [UsageTotals](UsageTotals.md)

## Example

```typescript
import type { UsageSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "bucket": null,
  "byApiKey": null,
  "byEndpoint": null,
  "byModel": null,
  "byProvider": null,
  "bySource": null,
  "bySourceLabel": null,
  "byTool": null,
  "byUser": null,
  "endDate": null,
  "errorsByStatusCode": null,
  "series": null,
  "startDate": null,
  "totals": null,
} satisfies UsageSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


