
# MessagesRequest

Anthropic Messages API-compatible request.  The wire fields are derived from any-llm\'s ``MessagesParams`` (see ``_schema_derive``) so the schema cannot silently drop a param any-llm forwards. Gateway-internal fields (``mcp_servers``, ``mcp_server_ids``, ``guardrails``, ``tools_header``, ``max_tool_iterations``) opt the request into gateway-managed MCP / sandbox / web_search / guardrails without changing the upstream wire shape. They\'re stripped before the request is forwarded.

## Properties

Name | Type
------------ | -------------
`cacheControl` | { [key: string]: any; }
`guardrails` | [Array&lt;GuardrailConfig&gt;](GuardrailConfig.md)
`maxTokens` | number
`maxToolIterations` | number
`mcpServerIds` | Array&lt;string&gt;
`mcpServers` | [Array&lt;McpServerConfig&gt;](McpServerConfig.md)
`messages` | Array&lt;{ [key: string]: any; }&gt;
`metadata` | { [key: string]: any; }
`model` | string
`sessionLabel` | string
`stopSequences` | Array&lt;string&gt;
`stream` | boolean
`system` | [System](System.md)
`temperature` | number
`thinking` | { [key: string]: any; }
`toolChoice` | { [key: string]: any; }
`tools` | Array&lt;{ [key: string]: any; }&gt;
`toolsHeader` | string
`topK` | number
`topP` | number

## Example

```typescript
import type { MessagesRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheControl": null,
  "guardrails": null,
  "maxTokens": null,
  "maxToolIterations": null,
  "mcpServerIds": null,
  "mcpServers": null,
  "messages": null,
  "metadata": null,
  "model": null,
  "sessionLabel": null,
  "stopSequences": null,
  "stream": null,
  "system": null,
  "temperature": null,
  "thinking": null,
  "toolChoice": null,
  "tools": null,
  "toolsHeader": null,
  "topK": null,
  "topP": null,
} satisfies MessagesRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessagesRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


