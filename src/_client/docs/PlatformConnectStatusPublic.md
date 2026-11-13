
# PlatformConnectStatusPublic

Where the deployment\'s connection to otari.ai stands.  ``idle`` means no attempt. The code, the link and the seconds left are set while ``pending`` and null otherwise. ``connected`` means the ``otari-ai`` hosted provider holds the key otari.ai issued.

## Properties

Name | Type
------------ | -------------
`expiresIn` | number
`status` | string
`userCode` | string
`verificationUriComplete` | string

## Example

```typescript
import type { PlatformConnectStatusPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "expiresIn": null,
  "status": null,
  "userCode": null,
  "verificationUriComplete": null,
} satisfies PlatformConnectStatusPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlatformConnectStatusPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


