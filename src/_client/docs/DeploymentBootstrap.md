
# DeploymentBootstrap

What the dashboard shell needs before it can render anything.

## Properties

Name | Type
------------ | -------------
`dataPlaneUrl` | string
`deploymentType` | string
`docsUrl` | string
`mailReady` | boolean
`maintenanceMode` | boolean
`managementUrl` | string
`oauthProviders` | Array&lt;string&gt;
`passkeysReady` | boolean
`privacyUrl` | string
`sessionType` | string
`signInMethods` | Array&lt;string&gt;
`surfaces` | Array&lt;string&gt;
`termsUrl` | string

## Example

```typescript
import type { DeploymentBootstrap } from ''

// TODO: Update the object below with actual values
const example = {
  "dataPlaneUrl": null,
  "deploymentType": null,
  "docsUrl": null,
  "mailReady": null,
  "maintenanceMode": null,
  "managementUrl": null,
  "oauthProviders": null,
  "passkeysReady": null,
  "privacyUrl": null,
  "sessionType": null,
  "signInMethods": null,
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


