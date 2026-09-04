
# AuthorizeResponse

Where to send the browser, and the state to check when it comes back.

## Properties

Name | Type
------------ | -------------
`authorizationUrl` | string
`state` | string

## Example

```typescript
import type { AuthorizeResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "authorizationUrl": null,
  "state": null,
} satisfies AuthorizeResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuthorizeResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


