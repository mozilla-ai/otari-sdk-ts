
# WorkspaceActivationPublic

Where a workspace stands on its first successful request.

## Properties

Name | Type
------------ | -------------
`activationAttempt` | [ActivationAttemptPublic](ActivationAttemptPublic.md)
`dismissed` | boolean
`experienceEligible` | boolean
`latestAttempt` | [ActivationAttemptPublic](ActivationAttemptPublic.md)
`status` | string

## Example

```typescript
import type { WorkspaceActivationPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "activationAttempt": null,
  "dismissed": null,
  "experienceEligible": null,
  "latestAttempt": null,
  "status": null,
} satisfies WorkspaceActivationPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceActivationPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


