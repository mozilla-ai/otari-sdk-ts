
# McpExecuteRequest

One stored server, and the exact call the application authorized.  No inline server fields (R-REQ-4): a caller registers a remote MCP server through the control plane once and refers to it by id afterwards, which keeps URLs, credentials, revocation and allowlist policy on Otari\'s side of the boundary instead of in every request.  Extras are forbidden rather than ignored, so a caller still sending the old inline ``server`` block is told its configuration was not used instead of watching Otari quietly execute against a different server than the one it named.

## Properties

Name | Type
------------ | -------------
`arguments` | { [key: string]: any; }
`clientExecutionId` | string
`mcpServerId` | string
`serverRevision` | string
`toolName` | string

## Example

```typescript
import type { McpExecuteRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "arguments": null,
  "clientExecutionId": null,
  "mcpServerId": null,
  "serverRevision": null,
  "toolName": null,
} satisfies McpExecuteRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpExecuteRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


