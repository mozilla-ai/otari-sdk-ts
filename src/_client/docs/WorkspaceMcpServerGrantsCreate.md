
# WorkspaceMcpServerGrantsCreate

Grant the same tools to several keys and users at once; a subject that already has a grant gets these tools.

## Properties

Name | Type
------------ | -------------
`apiKeyIds` | Array&lt;string&gt;
`tools` | Array&lt;string&gt;
`userIds` | Array&lt;string&gt;

## Example

```typescript
import type { WorkspaceMcpServerGrantsCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "apiKeyIds": null,
  "tools": null,
  "userIds": null,
} satisfies WorkspaceMcpServerGrantsCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerGrantsCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


