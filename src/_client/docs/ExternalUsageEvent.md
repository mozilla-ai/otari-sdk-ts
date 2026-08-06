
# ExternalUsageEvent

One imported usage event. Content-free: token counts and metadata only.  ``extra=\"forbid\"`` rejects any unexpected field (e.g. a stray ``prompt`` or ``completion``) with a 422 rather than silently dropping it, so no prompt or completion text can ever be accepted here.

## Properties

Name | Type
------------ | -------------
`cacheReadTokens` | number
`cacheTokensInPrompt` | boolean
`cacheWrite1hTokens` | number
`cacheWriteTokens` | number
`durationMs` | number
`inputTokens` | number
`model` | string
`outputTokens` | number
`provider` | string
`sessionLabel` | string
`sourceEventId` | string
`status` | string
`timestamp` | Date
`userId` | string

## Example

```typescript
import type { ExternalUsageEvent } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadTokens": null,
  "cacheTokensInPrompt": null,
  "cacheWrite1hTokens": null,
  "cacheWriteTokens": null,
  "durationMs": null,
  "inputTokens": null,
  "model": null,
  "outputTokens": null,
  "provider": null,
  "sessionLabel": null,
  "sourceEventId": null,
  "status": null,
  "timestamp": null,
  "userId": null,
} satisfies ExternalUsageEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExternalUsageEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


