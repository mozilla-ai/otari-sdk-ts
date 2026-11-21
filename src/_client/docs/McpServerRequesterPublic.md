
# McpServerRequesterPublic

One member who asked for a server, as a workspace manager sees them.

## Properties

Name | Type
------------ | -------------
`email` | string
`fullName` | string
`note` | string
`requestId` | string
`requestedAt` | Date
`userId` | string

## Example

```typescript
import type { McpServerRequesterPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "fullName": null,
  "note": null,
  "requestId": null,
  "requestedAt": null,
  "userId": null,
} satisfies McpServerRequesterPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpServerRequesterPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


