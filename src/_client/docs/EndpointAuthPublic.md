
# EndpointAuthPublic

What an endpoint credential reports. Never carries the value, only its last four characters.

## Properties

Name | Type
------------ | -------------
`expiresAt` | Date
`headerName` | string
`last4` | string
`method` | [EndpointAuthMethod](EndpointAuthMethod.md)
`state` | [EndpointAuthState](EndpointAuthState.md)

## Example

```typescript
import type { EndpointAuthPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "expiresAt": null,
  "headerName": null,
  "last4": null,
  "method": null,
  "state": null,
} satisfies EndpointAuthPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EndpointAuthPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


