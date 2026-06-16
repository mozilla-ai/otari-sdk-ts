
# ResponsesRequest

OpenAI Responses API-compatible request.  The wire fields are derived from any-llm\'s ``ResponsesParams`` (see ``_schema_derive``) so the schema cannot silently drop a param any-llm forwards. Gateway-internal fields (``mcp_servers``, ``mcp_server_ids``, ``guardrails``, ``tools_header``, ``max_tool_iterations``) opt the request into gateway-managed MCP / sandbox / web_search / guardrails without changing the upstream wire shape. They\'re stripped before the request is forwarded.

## Properties

Name | Type
------------ | -------------
`background` | boolean
`conversation` | [Conversation](Conversation.md)
`frequencyPenalty` | number
`guardrails` | [Array&lt;GuardrailConfig&gt;](GuardrailConfig.md)
`include` | Array&lt;string&gt;
`input` | any
`instructions` | string
`maxOutputTokens` | number
`maxToolCalls` | number
`maxToolIterations` | number
`mcpServerIds` | Array&lt;string&gt;
`mcpServers` | [Array&lt;McpServerConfig&gt;](McpServerConfig.md)
`metadata` | { [key: string]: string; }
`model` | string
`parallelToolCalls` | boolean
`presencePenalty` | number
`previousResponseId` | string
`promptCacheKey` | string
`promptCacheRetention` | string
`reasoning` | { [key: string]: any; }
`responseFormat` | { [key: string]: any; }
`safetyIdentifier` | string
`serviceTier` | string
`store` | boolean
`stream` | boolean
`streamOptions` | { [key: string]: any; }
`temperature` | number
`text` | { [key: string]: any; }
`toolChoice` | [ToolChoice1](ToolChoice1.md)
`tools` | Array&lt;{ [key: string]: any; }&gt;
`toolsHeader` | string
`topLogprobs` | number
`topP` | number
`truncation` | string
`user` | string

## Example

```typescript
import type { ResponsesRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "background": null,
  "conversation": null,
  "frequencyPenalty": null,
  "guardrails": null,
  "include": null,
  "input": null,
  "instructions": null,
  "maxOutputTokens": null,
  "maxToolCalls": null,
  "maxToolIterations": null,
  "mcpServerIds": null,
  "mcpServers": null,
  "metadata": null,
  "model": null,
  "parallelToolCalls": null,
  "presencePenalty": null,
  "previousResponseId": null,
  "promptCacheKey": null,
  "promptCacheRetention": null,
  "reasoning": null,
  "responseFormat": null,
  "safetyIdentifier": null,
  "serviceTier": null,
  "store": null,
  "stream": null,
  "streamOptions": null,
  "temperature": null,
  "text": null,
  "toolChoice": null,
  "tools": null,
  "toolsHeader": null,
  "topLogprobs": null,
  "topP": null,
  "truncation": null,
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


