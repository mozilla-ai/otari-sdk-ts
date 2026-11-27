
# McpServerRequestDecline

Declines every pending request for one catalog server.

## Properties

Name | Type
------------ | -------------
`catalogName` | string
`reason` | string

## Example

```typescript
import type { McpServerRequestDecline } from ''

// TODO: Update the object below with actual values
const example = {
  "catalogName": null,
  "reason": null,
} satisfies McpServerRequestDecline

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpServerRequestDecline
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


