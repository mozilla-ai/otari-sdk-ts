
# UsageEntry

A single usage log entry.

## Properties

Name | Type
------------ | -------------
`apiKeyId` | string
`attemptCount` | number
`attemptPosition` | number
`billingMeters` | { [key: string]: any; }
`cacheReadTokens` | number
`cacheWrite1hTokens` | number
`cacheWriteTokens` | number
`completionTokens` | number
`cost` | number
`countsTowardBudget` | boolean
`endpoint` | string
`errorMessage` | string
`id` | string
`latencyMs` | number
`model` | string
`policyName` | string
`pricingBreakdown` | Array&lt;{ [key: string]: UsageEntryPricingBreakdownInnerValue; }&gt;
`promptTokens` | number
`provider` | string
`requestGroupId` | string
`selectionReason` | string
`source` | string
`sourceLabel` | string
`status` | string
`statusCode` | number
`timestamp` | string
`totalTokens` | number
`userId` | string

## Example

```typescript
import type { UsageEntry } from ''

// TODO: Update the object below with actual values
const example = {
  "apiKeyId": null,
  "attemptCount": null,
  "attemptPosition": null,
  "billingMeters": null,
  "cacheReadTokens": null,
  "cacheWrite1hTokens": null,
  "cacheWriteTokens": null,
  "completionTokens": null,
  "cost": null,
  "countsTowardBudget": null,
  "endpoint": null,
  "errorMessage": null,
  "id": null,
  "latencyMs": null,
  "model": null,
  "policyName": null,
  "pricingBreakdown": null,
  "promptTokens": null,
  "provider": null,
  "requestGroupId": null,
  "selectionReason": null,
  "source": null,
  "sourceLabel": null,
  "status": null,
  "statusCode": null,
  "timestamp": null,
  "totalTokens": null,
  "userId": null,
} satisfies UsageEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


