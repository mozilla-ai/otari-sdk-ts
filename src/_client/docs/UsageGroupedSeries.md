
# UsageGroupedSeries

A per-group time series for the dashboard\'s stacked charts.  ``groups`` ranks the window\'s top groups by spend (plus the reconciling ``other`` fold), in the order a chart should stack and color them; ``points`` is sparse (only populated cells), keyed by canonical UTC ``bucket_start``.

## Properties

Name | Type
------------ | -------------
`bucket` | string
`endDate` | string
`groupBy` | string
`groups` | [Array&lt;UsageGroupRow&gt;](UsageGroupRow.md)
`points` | [Array&lt;UsageGroupedSeriesPoint&gt;](UsageGroupedSeriesPoint.md)
`startDate` | string

## Example

```typescript
import type { UsageGroupedSeries } from ''

// TODO: Update the object below with actual values
const example = {
  "bucket": null,
  "endDate": null,
  "groupBy": null,
  "groups": null,
  "points": null,
  "startDate": null,
} satisfies UsageGroupedSeries

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageGroupedSeries
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


