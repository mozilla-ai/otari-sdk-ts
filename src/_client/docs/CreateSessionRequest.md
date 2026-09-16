
# CreateSessionRequest

Sign in to the dashboard with exactly one credential.  A flat body with an optional field per credential, rather than a tagged union: it is one extra key on the wire, it generates a client type a hand-written form can fill in, and the validator below makes the two forms exclusive anyway.  The example carries one credential, because a generated example is a body somebody will post: the schema alone would produce every field at once, which is the one shape the validator below refuses.

## Properties

Name | Type
------------ | -------------
`email` | string
`masterKey` | string
`password` | string

## Example

```typescript
import type { CreateSessionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "masterKey": null,
  "password": null,
} satisfies CreateSessionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSessionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


