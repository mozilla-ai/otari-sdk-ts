
# ExternalIngestError

A single rejected event, with enough context to fix it and retry.

## Properties

Name | Type
------------ | -------------
`detail` | string
`index` | number
`sourceEventId` | string

## Example

```typescript
import type { ExternalIngestError } from ''

// TODO: Update the object below with actual values
const example = {
  "detail": null,
  "index": null,
  "sourceEventId": null,
} satisfies ExternalIngestError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExternalIngestError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


