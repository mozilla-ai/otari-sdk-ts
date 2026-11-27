
# WorkspaceMcpServerLastFailure

The most recent time the gateway could not get an answer from the server, and why.

## Properties

Name | Type
------------ | -------------
`error` | [CheckFailure](CheckFailure.md)
`failedAt` | string
`httpStatus` | number

## Example

```typescript
import type { WorkspaceMcpServerLastFailure } from ''

// TODO: Update the object below with actual values
const example = {
  "error": null,
  "failedAt": null,
  "httpStatus": null,
} satisfies WorkspaceMcpServerLastFailure

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerLastFailure
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


