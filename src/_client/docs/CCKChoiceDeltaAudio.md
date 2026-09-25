
# CCKChoiceDeltaAudio

Partial audio object emitted by a streaming chat completion.  Providers may send the identifier, transcript, data, and expiration timestamp in separate chunks, so every field is optional. The data field contains the base64-encoded bytes for the current chunk.

## Properties

Name | Type
------------ | -------------
`id` | string
`data` | string
`transcript` | string
`expiresAt` | number

## Example

```typescript
import type { CCKChoiceDeltaAudio } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "data": null,
  "transcript": null,
  "expiresAt": null,
} satisfies CCKChoiceDeltaAudio

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCKChoiceDeltaAudio
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


