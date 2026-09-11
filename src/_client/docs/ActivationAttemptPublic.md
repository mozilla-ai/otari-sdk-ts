
# ActivationAttemptPublic

One gateway request in this workspace, as the guide reports it.

## Properties

Name | Type
------------ | -------------
`costUsd` | number
`errorCategory` | string
`latencyMs` | number
`model` | string
`occurredAt` | string
`provider` | string
`requestId` | string
`status` | string

## Example

```typescript
import type { ActivationAttemptPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "costUsd": null,
  "errorCategory": null,
  "latencyMs": null,
  "model": null,
  "occurredAt": null,
  "provider": null,
  "requestId": null,
  "status": null,
} satisfies ActivationAttemptPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActivationAttemptPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


