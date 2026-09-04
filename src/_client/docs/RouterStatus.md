
# RouterStatus

How warm this user\'s routing memory is, and what depends on it.  Routing memory has no single warmth: it is a set of independent pools. ``default_pool`` is what a request with no ``Otari-Router-Task`` header votes over (every record the user has in this workspace, labeled or not) and ``tasks`` lists each partition, which only requests carrying that label use. Each crosses ``seed_count`` on its own.

## Properties

Name | Type
------------ | -------------
`alpha` | number
`confidenceFloor` | number
`defaultPool` | [PoolStatus](PoolStatus.md)
`embeddingModel` | string
`granularity` | string
`k` | number
`policies` | [Array&lt;LearnedPolicy&gt;](LearnedPolicy.md)
`seedCount` | number
`tasks` | [Array&lt;TaskPool&gt;](TaskPool.md)
`userId` | string
`workspaceId` | string

## Example

```typescript
import type { RouterStatus } from ''

// TODO: Update the object below with actual values
const example = {
  "alpha": null,
  "confidenceFloor": null,
  "defaultPool": null,
  "embeddingModel": null,
  "granularity": null,
  "k": null,
  "policies": null,
  "seedCount": null,
  "tasks": null,
  "userId": null,
  "workspaceId": null,
} satisfies RouterStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RouterStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


