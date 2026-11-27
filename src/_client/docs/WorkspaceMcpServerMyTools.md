
# WorkspaceMcpServerMyTools

The tools the caller may use on one server, under the access rules that apply to them.  The rule is the caller\'s own: their user\'s grant, else the server\'s ``everyone_tools``. A key with a grant of its own can reach more or less than this.

## Properties

Name | Type
------------ | -------------
`access` | string
`checkedAt` | string
`decidedBy` | string
`known` | boolean
`serverId` | string
`tools` | [Array&lt;McpToolSummary&gt;](McpToolSummary.md)

## Example

```typescript
import type { WorkspaceMcpServerMyTools } from ''

// TODO: Update the object below with actual values
const example = {
  "access": null,
  "checkedAt": null,
  "decidedBy": null,
  "known": null,
  "serverId": null,
  "tools": null,
} satisfies WorkspaceMcpServerMyTools

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerMyTools
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


