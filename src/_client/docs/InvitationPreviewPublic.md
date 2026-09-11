
# InvitationPreviewPublic

What an unauthenticated visitor sees before committing to accept.  Deliberately narrow: the address it was sent to, the organization\'s name, and the role on offer. The token is the caller\'s only credential here, not a session, so this carries nothing that identifies who sent it or any other member.

## Properties

Name | Type
------------ | -------------
`email` | string
`expiresAt` | Date
`organizationName` | string
`role` | string

## Example

```typescript
import type { InvitationPreviewPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "expiresAt": null,
  "organizationName": null,
  "role": null,
} satisfies InvitationPreviewPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvitationPreviewPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


