
# ContentSharePublic

A session\'s owner letting an audience read what it was about.

## Properties

Name | Type
------------ | -------------
`active` | boolean
`audience` | string
`createdAt` | Date
`id` | string
`note` | string
`readCount` | number
`reads` | [Array&lt;ContentReadPublic&gt;](ContentReadPublic.md)
`revokedAt` | Date

## Example

```typescript
import type { ContentSharePublic } from ''

// TODO: Update the object below with actual values
const example = {
  "active": null,
  "audience": null,
  "createdAt": null,
  "id": null,
  "note": null,
  "readCount": null,
  "reads": null,
  "revokedAt": null,
} satisfies ContentSharePublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContentSharePublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


