
# ResponsesRequest

OpenAI Responses API-compatible request.  Gateway-internal fields (``mcp_servers``, ``mcp_server_ids``, ``guardrails``, ``tools_header``, ``max_tool_iterations``) opt the request into gateway-managed MCP / sandbox / web_search / guardrails without changing the upstream wire shape. They\'re stripped before the request is forwarded.

## Properties

Name | Type
------------ | -------------
`guardrails` | [Array&lt;GuardrailConfig&gt;](GuardrailConfig.md)
`input` | any
`maxToolIterations` | number
`mcpServerIds` | Array&lt;string&gt;
`mcpServers` | [Array&lt;McpServerConfig&gt;](McpServerConfig.md)
`model` | string
`stream` | boolean
`tools` | Array&lt;{ [key: string]: any; }&gt;
`toolsHeader` | string
`user` | string

## Example

```typescript
import type { ResponsesRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "guardrails": null,
  "input": null,
  "maxToolIterations": null,
  "mcpServerIds": null,
  "mcpServers": null,
  "model": null,
  "stream": null,
  "tools": null,
  "toolsHeader": null,
  "user": null,
} satisfies ResponsesRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResponsesRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


