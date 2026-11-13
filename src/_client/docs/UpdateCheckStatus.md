
# UpdateCheckStatus

Whether this deployment checks for new releases, who decided, what it sends, and what it last heard.

## Properties

Name | Type
------------ | -------------
`advisories` | [Array&lt;UpdateCheckAdvisory&gt;](UpdateCheckAdvisory.md)
`answeredBy` | string
`checkable` | boolean
`currentVersion` | string
`enabled` | boolean
`endpoint` | string
`installId` | string
`lastCheckedAt` | Date
`latestVersion` | string
`nextCheckAt` | Date
`presetBy` | string
`releaseUrl` | string
`updateAvailable` | boolean

## Example

```typescript
import type { UpdateCheckStatus } from ''

// TODO: Update the object below with actual values
const example = {
  "advisories": null,
  "answeredBy": null,
  "checkable": null,
  "currentVersion": null,
  "enabled": null,
  "endpoint": null,
  "installId": null,
  "lastCheckedAt": null,
  "latestVersion": null,
  "nextCheckAt": null,
  "presetBy": null,
  "releaseUrl": null,
  "updateAvailable": null,
} satisfies UpdateCheckStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCheckStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


