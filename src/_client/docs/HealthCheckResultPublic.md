
# HealthCheckResultPublic

What one offering answered in the latest finished run.

## Properties

Name | Type
------------ | -------------
`checkedAt` | Date
`error` | string
`failedRuns` | number
`failingSince` | Date
`latencyMs` | number
`provider` | string
`selector` | string
`status` | string
`statusCode` | number

## Example

```typescript
import type { HealthCheckResultPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "checkedAt": null,
  "error": null,
  "failedRuns": null,
  "failingSince": null,
  "latencyMs": null,
  "provider": null,
  "selector": null,
  "status": null,
  "statusCode": null,
} satisfies HealthCheckResultPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HealthCheckResultPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


