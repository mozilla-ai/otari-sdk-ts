
# UsageSeriesPoint

One time bucket. ``bucket_start`` is canonical ISO-8601 UTC (``...Z``), identical across SQLite and PostgreSQL for the same underlying instant.  ``tokens`` stays the raw provider-reported total (the field predates the composition split and external consumers may read it). The billed composition fields are normalized via billing meters (see ``_billed_expr``): ``input_tokens`` includes both cache buckets, so a chart derives fresh input as ``max(0, input_tokens - cache_read_tokens - cache_write_tokens)`` and the billed total as ``fresh + cache_read + cache_write + output``.

## Properties

Name | Type
------------ | -------------
`bucketStart` | string
`cacheReadTokens` | number
`cacheWriteTokens` | number
`cost` | number
`errors` | number
`inputTokens` | number
`outputTokens` | number
`requests` | number
`tokens` | number

## Example

```typescript
import type { UsageSeriesPoint } from ''

// TODO: Update the object below with actual values
const example = {
  "bucketStart": null,
  "cacheReadTokens": null,
  "cacheWriteTokens": null,
  "cost": null,
  "errors": null,
  "inputTokens": null,
  "outputTokens": null,
  "requests": null,
  "tokens": null,
} satisfies UsageSeriesPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageSeriesPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


