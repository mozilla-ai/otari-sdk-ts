
# FederationTokenRequest

An RFC 7523 ``jwt-bearer`` token request, as the Anthropic SDKs and Claude Code send it.  Every field is optional here so that a missing one is answered in the RFC 6749 error shape rather than as a validation error. Fields the request does not use are ignored.

## Properties

Name | Type
------------ | -------------
`assertion` | string
`federationRuleId` | string
`grantType` | string
`organizationId` | string
`serviceAccountId` | string
`workspaceId` | string

## Example

```typescript
import type { FederationTokenRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "assertion": null,
  "federationRuleId": null,
  "grantType": null,
  "organizationId": null,
  "serviceAccountId": null,
  "workspaceId": null,
} satisfies FederationTokenRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FederationTokenRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


