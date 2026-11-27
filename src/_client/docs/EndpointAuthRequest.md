
# EndpointAuthRequest

The credential an edge proxy in front of a key\'s base URL requires.  ``method`` is a closed set of ways to produce request headers. TLS client authentication is not one of them: it is presented when the connection is made, so it would be a field of its own rather than a method here.

## Properties

Name | Type
------------ | -------------
`expiresAt` | Date
`headerName` | string
`method` | [EndpointAuthMethod](EndpointAuthMethod.md)
`secret` | string

## Example

```typescript
import type { EndpointAuthRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "expiresAt": null,
  "headerName": null,
  "method": null,
  "secret": null,
} satisfies EndpointAuthRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EndpointAuthRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


