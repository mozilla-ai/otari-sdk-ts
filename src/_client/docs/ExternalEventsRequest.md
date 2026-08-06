
# ExternalEventsRequest

A batch of imported usage events sharing a source and default user.  ``extra=\"forbid\"`` here mirrors the per-event schema: a stray content field at the batch level (e.g. a top-level ``prompt``) is a 422, not silently ignored.

## Properties

Name | Type
------------ | -------------
`events` | [Array&lt;ExternalUsageEvent&gt;](ExternalUsageEvent.md)
`source` | string
`userId` | string

## Example

```typescript
import type { ExternalEventsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "events": null,
  "source": null,
  "userId": null,
} satisfies ExternalEventsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExternalEventsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


