
# ExternalIngestResult

Per-batch outcome. Re-submitting is safe: prior events count as duplicates.

## Properties

Name | Type
------------ | -------------
`accepted` | number
`duplicate` | number
`errors` | [Array&lt;ExternalIngestError&gt;](ExternalIngestError.md)
`rejected` | number

## Example

```typescript
import type { ExternalIngestResult } from ''

// TODO: Update the object below with actual values
const example = {
  "accepted": null,
  "duplicate": null,
  "errors": null,
  "rejected": null,
} satisfies ExternalIngestResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExternalIngestResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


