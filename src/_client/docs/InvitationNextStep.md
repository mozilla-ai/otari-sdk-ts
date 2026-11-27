
# InvitationNextStep

What an invitee does to get in, as Otari decides it.  The members are exclusive and cover every pending invitation. ``set_password`` means accepting may choose this address\'s first password. ``sign_in`` means the address\'s credentials open a session. ``verify_email`` means a password chosen at signup is waiting on a verification link this deployment can deliver. ``use_another_way_in`` means none of those hold, and ``ways_in`` says what this deployment offers instead.  NOTE: ``ways_in`` is filled only for ``use_another_way_in`` and ``verify_email``. The other two leave it empty.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { InvitationNextStep } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies InvitationNextStep

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvitationNextStep
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


