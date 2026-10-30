
# TraceContentPolicyPublic

What this deployment keeps of agent sessions, and who besides a session\'s owner can open it.

## Properties

Name | Type
------------ | -------------
`contentAvailable` | boolean
`platformBreakGlass` | boolean
`retentionDays` | number
`sessionMaxAgeDays` | number

## Example

```typescript
import type { TraceContentPolicyPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "contentAvailable": null,
  "platformBreakGlass": null,
  "retentionDays": null,
  "sessionMaxAgeDays": null,
} satisfies TraceContentPolicyPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TraceContentPolicyPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


