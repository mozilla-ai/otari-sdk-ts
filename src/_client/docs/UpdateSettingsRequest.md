
# UpdateSettingsRequest

Change one or more runtime settings. Omitted fields are left unchanged.  Only the hot-changeable subset is accepted; startup-only fields are not settable over the API (they are display-only in the dashboard).

## Properties

Name | Type
------------ | -------------
`budgetEstimateDefaultOutputTokens` | number
`defaultPricing` | boolean
`fileUnderstandingEnabled` | boolean
`modelCacheTtlSeconds` | number
`modelDiscovery` | boolean
`modelDiscoveryNegativeTtlSeconds` | number
`modelDiscoveryTimeoutSeconds` | number
`modelsDevCacheTtlSeconds` | number
`modelsDevMetadata` | boolean
`rejectUserMismatch` | boolean
`requirePricing` | boolean
`streamMissingUsagePolicy` | string
`visionDescribeMaxTokens` | number
`visionDescribeModel` | string
`visionStrategy` | string

## Example

```typescript
import type { UpdateSettingsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetEstimateDefaultOutputTokens": null,
  "defaultPricing": null,
  "fileUnderstandingEnabled": null,
  "modelCacheTtlSeconds": null,
  "modelDiscovery": null,
  "modelDiscoveryNegativeTtlSeconds": null,
  "modelDiscoveryTimeoutSeconds": null,
  "modelsDevCacheTtlSeconds": null,
  "modelsDevMetadata": null,
  "rejectUserMismatch": null,
  "requirePricing": null,
  "streamMissingUsagePolicy": null,
  "visionDescribeMaxTokens": null,
  "visionDescribeModel": null,
  "visionStrategy": null,
} satisfies UpdateSettingsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSettingsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


