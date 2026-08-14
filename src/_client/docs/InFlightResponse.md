
# InFlightResponse

The requests in flight on the answering worker.

## Properties

Name | Type
------------ | -------------
`requests` | [Array&lt;InFlightEntry&gt;](InFlightEntry.md)
`total` | number

## Example

```typescript
import type { InFlightResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "requests": null,
  "total": null,
} satisfies InFlightResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InFlightResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


