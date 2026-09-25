
# OverviewSummaryResponse

What the dashboard overview renders beside its usage chart.  ``budgets`` and ``ceilings`` are null where the caller may not see them, which is not the same as a strip with nothing in it: deployment budgets are the operator\'s, and spend ceilings are an organization owner\'s or admin\'s.

## Properties

Name | Type
------------ | -------------
`activeKeys` | number
`activeMembers` | number
`budgets` | [AllocationHealthResponse](AllocationHealthResponse.md)
`ceilings` | [AllocationHealthResponse](AllocationHealthResponse.md)

## Example

```typescript
import type { OverviewSummaryResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "activeKeys": null,
  "activeMembers": null,
  "budgets": null,
  "ceilings": null,
} satisfies OverviewSummaryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OverviewSummaryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


