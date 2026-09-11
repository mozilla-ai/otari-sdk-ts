
# McpToolsResponse

The authorized catalog for one stored server.  Carries no server URL, no credential, and no allowlist entry that the live catalog did not return (R-DISC-2). ``server_revision`` is what an application persists with a proposed call and sends back to ``/api/v1/mcp/execute``, so a stored-configuration change between the two is refused rather than executed.

## Properties

Name | Type
------------ | -------------
`serverId` | string
`serverRevision` | string
`tools` | [Array&lt;McpToolDefinition&gt;](McpToolDefinition.md)
`warnings` | [Array&lt;McpToolWarning&gt;](McpToolWarning.md)

## Example

```typescript
import type { McpToolsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "serverId": null,
  "serverRevision": null,
  "tools": null,
  "warnings": null,
} satisfies McpToolsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpToolsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


