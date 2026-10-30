
# HealthCheckRunPublic

One pass over every offering.

## Properties

Name | Type
------------ | -------------
`failed` | number
`finishedAt` | Date
`id` | string
`includedReasoning` | boolean
`passed` | number
`startedAt` | Date
`total` | number

## Example

```typescript
import type { HealthCheckRunPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "failed": null,
  "finishedAt": null,
  "id": null,
  "includedReasoning": null,
  "passed": null,
  "startedAt": null,
  "total": null,
} satisfies HealthCheckRunPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HealthCheckRunPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


