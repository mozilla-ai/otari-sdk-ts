
# KeyLimitPublic

One cap a request made with the calling key has to pass.  ``used_*`` counts what the budget gate counts: recorded use plus the holds of requests still in flight. On a cap the key shares with the rest of its workspace or organization the limit and the use are left out, and only what is left is reported; that still moves as the others spend.

## Properties

Name | Type
------------ | -------------
`limitRequests` | number
`limitTokens` | number
`limitUsd` | number
`provider` | string
`remainingRequests` | number
`remainingTokens` | number
`remainingUsd` | number
`resetsAt` | Date
`scope` | string
`usedRequests` | number
`usedTokens` | number
`usedUsd` | number

## Example

```typescript
import type { KeyLimitPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "limitRequests": null,
  "limitTokens": null,
  "limitUsd": null,
  "provider": null,
  "remainingRequests": null,
  "remainingTokens": null,
  "remainingUsd": null,
  "resetsAt": null,
  "scope": null,
  "usedRequests": null,
  "usedTokens": null,
  "usedUsd": null,
} satisfies KeyLimitPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KeyLimitPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


