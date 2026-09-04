
# WebAuthnCredentialPublic

A passkey as the settings page lists it.  Carries no key material. ``credential_id`` is here because the browser needs it to tell the passkey it just used from the others in the list, and it is a public identifier the authenticator hands to any site that asks: it is what ``allowCredentials`` publishes to an unauthenticated caller during a ceremony.

## Properties

Name | Type
------------ | -------------
`backedUp` | boolean
`createdAt` | Date
`credentialId` | string
`id` | string
`isUsable` | boolean
`lastUsedAt` | Date
`name` | string
`rpId` | string
`transports` | Array&lt;string&gt;

## Example

```typescript
import type { WebAuthnCredentialPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "backedUp": null,
  "createdAt": null,
  "credentialId": null,
  "id": null,
  "isUsable": null,
  "lastUsedAt": null,
  "name": null,
  "rpId": null,
  "transports": null,
} satisfies WebAuthnCredentialPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebAuthnCredentialPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


