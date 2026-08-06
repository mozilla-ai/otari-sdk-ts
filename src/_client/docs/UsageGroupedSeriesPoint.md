
# UsageGroupedSeriesPoint

One (time bucket, group) cell of a grouped series.  ``key``/``is_other`` follow the ``UsageGroupRow`` convention: ``key=None`` with ``is_other=True`` is the fold of groups outside the top N, ``key=None`` with ``is_other=False`` is a real NULL group (e.g. a deleted user). ``tokens`` is the *billed* total (input including cache, plus output), the same quantity the ungrouped series\' composition fields sum to.

## Properties

Name | Type
------------ | -------------
`bucketStart` | string
`cost` | number
`isOther` | boolean
`key` | string
`requests` | number
`tokens` | number

## Example

```typescript
import type { UsageGroupedSeriesPoint } from ''

// TODO: Update the object below with actual values
const example = {
  "bucketStart": null,
  "cost": null,
  "isOther": null,
  "key": null,
  "requests": null,
  "tokens": null,
} satisfies UsageGroupedSeriesPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageGroupedSeriesPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


