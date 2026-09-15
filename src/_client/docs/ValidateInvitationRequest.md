
# ValidateInvitationRequest

The preview lookup\'s body.  A ``POST`` with the token in the body rather than a ``GET`` with it in the URL, matching ``AcceptInvitationRequest``: the token is a bearer-style credential (see ``Invitation.token_hash``\'s docstring), and a URL is one a proxy or an access log routinely retains, which a request body is not.

## Properties

Name | Type
------------ | -------------
`token` | string

## Example

```typescript
import type { ValidateInvitationRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "token": null,
} satisfies ValidateInvitationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidateInvitationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


