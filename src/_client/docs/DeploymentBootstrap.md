
# DeploymentBootstrap

What the dashboard shell needs before it can render anything.

## Properties

Name | Type
------------ | -------------
`docsUrl` | string
`federationMemberRules` | boolean
`feedbackEnabled` | boolean
`mailReady` | boolean
`maintenanceMode` | boolean
`oauthProviders` | Array&lt;string&gt;
`openSignup` | boolean
`passkeysEnabled` | boolean
`passkeysReady` | boolean
`privacyUrl` | string
`publicCatalog` | boolean
`signInMethods` | Array&lt;string&gt;
`siteUrl` | string
`surfaces` | Array&lt;string&gt;
`termsUrl` | string

## Example

```typescript
import type { DeploymentBootstrap } from ''

// TODO: Update the object below with actual values
const example = {
  "docsUrl": null,
  "federationMemberRules": null,
  "feedbackEnabled": null,
  "mailReady": null,
  "maintenanceMode": null,
  "oauthProviders": null,
  "openSignup": null,
  "passkeysEnabled": null,
  "passkeysReady": null,
  "privacyUrl": null,
  "publicCatalog": null,
  "signInMethods": null,
  "siteUrl": null,
  "surfaces": null,
  "termsUrl": null,
} satisfies DeploymentBootstrap

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeploymentBootstrap
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


