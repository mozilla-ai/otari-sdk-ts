
# BreakGlassReadPublic

One recorded opening of a session\'s content without its owner\'s share.

## Properties

Name | Type
------------ | -------------
`id` | string
`kind` | string
`organizationId` | string
`readAt` | Date
`readerEmail` | string
`readerUserId` | string
`reason` | string
`reference` | string
`sessionUserId` | string
`traceId` | string
`workspaceId` | string

## Example

```typescript
import type { BreakGlassReadPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "kind": null,
  "organizationId": null,
  "readAt": null,
  "readerEmail": null,
  "readerUserId": null,
  "reason": null,
  "reference": null,
  "sessionUserId": null,
  "traceId": null,
  "workspaceId": null,
} satisfies BreakGlassReadPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BreakGlassReadPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


