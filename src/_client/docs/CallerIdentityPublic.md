
# CallerIdentityPublic

Who the caller is, as against what they may do.  The account control at the foot of the dashboard\'s sidebar draws a person, and no authenticated route reported the caller\'s own name or address, so it drew a role for everybody who could reach it: \"Operator\", which is not a name and on a multi-tenant deployment was not even true (mozilla-ai/otari#832).  Carried on the membership context for the reason ``deployment_operator`` is: the shell reads that context before it paints, so an identity taken from it needs no request of its own and cannot arrive a beat after the chrome it names. Publishing it costs nothing either, since it is the caller\'s own identity and they are holding the credential that resolved to it.  Both fields are nullable, and for opposite reasons. A local operator identity has no address, because first boot provisions it with a name and nothing to sign in with but the master key; a member added to the roster by address has no name until they claim the identity and supply one. So a shell has to be ready to draw either one alone.

## Properties

Name | Type
------------ | -------------
`email` | string
`fullName` | string
`userId` | string

## Example

```typescript
import type { CallerIdentityPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "fullName": null,
  "userId": null,
} satisfies CallerIdentityPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CallerIdentityPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


