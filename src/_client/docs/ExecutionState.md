
# ExecutionState

Whether the remote tool may have run (R-ERR-2).  A retry-safety classification, not a description of how the HTTP request went. ``NOT_STARTED`` is Otari saying it knows the tool did not run; ``OUTCOME_UNKNOWN`` is Otari saying it cannot know, which is the only honest answer once the transport has begun writing ``tools/call``.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { ExecutionState } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies ExecutionState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExecutionState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


