
# BlockedEmailPublic

One blocklist entry.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`createdByUserId` | string
`id` | string
`kind` | string
`pattern` | string
`reason` | string

## Example

```typescript
import type { BlockedEmailPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "createdByUserId": null,
  "id": null,
  "kind": null,
  "pattern": null,
  "reason": null,
} satisfies BlockedEmailPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BlockedEmailPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


