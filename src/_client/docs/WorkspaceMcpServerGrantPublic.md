
# WorkspaceMcpServerGrantPublic

One exception to a server\'s ``everyone_tools``: for a key, or for a user and so every key they own.

## Properties

Name | Type
------------ | -------------
`apiKeyId` | string
`createdAt` | string
`id` | string
`keyActive` | boolean
`keyName` | string
`subject` | string
`tools` | Array&lt;string&gt;
`updatedAt` | string
`userId` | string

## Example

```typescript
import type { WorkspaceMcpServerGrantPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "apiKeyId": null,
  "createdAt": null,
  "id": null,
  "keyActive": null,
  "keyName": null,
  "subject": null,
  "tools": null,
  "updatedAt": null,
  "userId": null,
} satisfies WorkspaceMcpServerGrantPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerGrantPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


