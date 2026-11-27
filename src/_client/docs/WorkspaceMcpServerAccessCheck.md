
# WorkspaceMcpServerAccessCheck

Whether one key may call one tool on a server, and which rule says so.

## Properties

Name | Type
------------ | -------------
`allowed` | boolean
`decidedBy` | string
`grantId` | string
`tools` | Array&lt;string&gt;

## Example

```typescript
import type { WorkspaceMcpServerAccessCheck } from ''

// TODO: Update the object below with actual values
const example = {
  "allowed": null,
  "decidedBy": null,
  "grantId": null,
  "tools": null,
} satisfies WorkspaceMcpServerAccessCheck

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerAccessCheck
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


