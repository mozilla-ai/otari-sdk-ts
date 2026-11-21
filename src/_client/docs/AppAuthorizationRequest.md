
# AppAuthorizationRequest

The dashboard records explicit approval for one workspace.

## Properties

Name | Type
------------ | -------------
`clientId` | string
`codeChallenge` | string
`codeChallengeMethod` | string
`expiration` | string
`limit` | [Limit](Limit.md)
`redirectUri` | string
`responseType` | string
`scopes` | [Array&lt;KeyScope&gt;](KeyScope.md)
`state` | string
`workspaceId` | string

## Example

```typescript
import type { AppAuthorizationRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "clientId": null,
  "codeChallenge": null,
  "codeChallengeMethod": null,
  "expiration": null,
  "limit": null,
  "redirectUri": null,
  "responseType": null,
  "scopes": null,
  "state": null,
  "workspaceId": null,
} satisfies AppAuthorizationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AppAuthorizationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


