
# ChatCompletionRequest

OpenAI-compatible chat completion request.  The completion-param fields are derived from any-llm\'s ``CompletionParams`` (see ``_schema_derive``) so the schema cannot silently drop a param any-llm forwards. Fields below either tighten a derived field (``messages``, ``response_format``) or add gateway-internal behavior (``mcp_servers``, ``mcp_server_ids``, ``guardrails``, ``tools_header``, ``max_tool_iterations``) that is stripped before the request is forwarded upstream.

## Properties

Name | Type
------------ | -------------
`frequencyPenalty` | number
`guardrails` | [Array&lt;GuardrailConfig&gt;](GuardrailConfig.md)
`logitBias` | { [key: string]: number; }
`logprobs` | boolean
`maxCompletionTokens` | number
`maxTokens` | number
`maxToolIterations` | number
`mcpServerIds` | Array&lt;string&gt;
`mcpServers` | [Array&lt;McpServerConfig&gt;](McpServerConfig.md)
`messages` | [Array&lt;ChatMessageInput&gt;](ChatMessageInput.md)
`model` | string
`n` | number
`parallelToolCalls` | boolean
`presencePenalty` | number
`reasoningEffort` | string
`responseFormat` | { [key: string]: any; }
`seed` | number
`sessionLabel` | string
`stop` | [Stop](Stop.md)
`stream` | boolean
`streamOptions` | { [key: string]: any; }
`temperature` | number
`toolChoice` | [ToolChoice](ToolChoice.md)
`tools` | [Array&lt;ChatCompletionRequestToolsInner&gt;](ChatCompletionRequestToolsInner.md)
`toolsHeader` | string
`topLogprobs` | number
`topP` | number
`user` | string

## Example

```typescript
import type { ChatCompletionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "frequencyPenalty": null,
  "guardrails": null,
  "logitBias": null,
  "logprobs": null,
  "maxCompletionTokens": null,
  "maxTokens": null,
  "maxToolIterations": null,
  "mcpServerIds": null,
  "mcpServers": null,
  "messages": null,
  "model": null,
  "n": null,
  "parallelToolCalls": null,
  "presencePenalty": null,
  "reasoningEffort": null,
  "responseFormat": null,
  "seed": null,
  "sessionLabel": null,
  "stop": null,
  "stream": null,
  "streamOptions": null,
  "temperature": null,
  "toolChoice": null,
  "tools": null,
  "toolsHeader": null,
  "topLogprobs": null,
  "topP": null,
  "user": null,
} satisfies ChatCompletionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatCompletionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


