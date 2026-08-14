
# InFlightEntry

One request the gateway is serving right now.  Field names match their ``UsageEntry`` counterparts so a request reads the same way in flight as it does once it has settled. ``id`` is the exception: it is an ephemeral tracking id, not the id of the usage row this will become.

## Properties

Name | Type
------------ | -------------
`apiKeyId` | string
`elapsedMs` | number
`endpoint` | string
`id` | string
`model` | string
`policyName` | string
`provider` | string
`startedAt` | Date
`userId` | string

## Example

```typescript
import type { InFlightEntry } from ''

// TODO: Update the object below with actual values
const example = {
  "apiKeyId": null,
  "elapsedMs": null,
  "endpoint": null,
  "id": null,
  "model": null,
  "policyName": null,
  "provider": null,
  "startedAt": null,
  "userId": null,
} satisfies InFlightEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InFlightEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


