
# AcceptedSnapshotResponse

One accepted genai-prices snapshot in the history.

## Properties

Name | Type
------------ | -------------
`acceptedAt` | Date
`acceptedBy` | string
`id` | string
`modelCount` | number

## Example

```typescript
import type { AcceptedSnapshotResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "acceptedAt": null,
  "acceptedBy": null,
  "id": null,
  "modelCount": null,
} satisfies AcceptedSnapshotResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AcceptedSnapshotResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


