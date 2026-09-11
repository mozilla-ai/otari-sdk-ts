
# MailSettings

What this deployment can send, and what stands in the way if it cannot.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`fromEmail` | string
`fromName` | string
`missing` | Array&lt;string&gt;
`publicBaseUrl` | string
`ready` | boolean
`transport` | string

## Example

```typescript
import type { MailSettings } from ''

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "fromEmail": null,
  "fromName": null,
  "missing": null,
  "publicBaseUrl": null,
  "ready": null,
  "transport": null,
} satisfies MailSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


