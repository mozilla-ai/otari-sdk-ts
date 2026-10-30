
# CheckFailure

Why a stored server failed its connection check.  Stored on the server\'s row and shown to whoever manages it, so each value names a cause an operator can act on, and none carries anything the remote server said. The first two are decided before any connection is opened.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { CheckFailure } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies CheckFailure

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckFailure
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


