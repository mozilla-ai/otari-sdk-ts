
# ChatCompletionRequest

OpenAI-compatible chat completion request.

## Properties

Name | Type
------------ | -------------
`guardrails` | [Array&lt;GuardrailConfig&gt;](GuardrailConfig.md)
`maxCompletionTokens` | number
`maxTokens` | number
`maxToolIterations` | number
`mcpServerIds` | Array&lt;string&gt;
`mcpServers` | [Array&lt;McpServerConfig&gt;](McpServerConfig.md)
`messages` | [Array&lt;ChatMessageInput&gt;](ChatMessageInput.md)
`model` | string
`responseFormat` | { [key: string]: any; }
`stream` | boolean
`streamOptions` | { [key: string]: any; }
`temperature` | number
`toolChoice` | [ToolChoice](ToolChoice.md)
`tools` | Array&lt;{ [key: string]: any; } | null&gt;
`toolsHeader` | string
`topP` | number
`user` | string

## Example

```typescript
import type { ChatCompletionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "guardrails": null,
  "maxCompletionTokens": null,
  "maxTokens": null,
  "maxToolIterations": null,
  "mcpServerIds": null,
  "mcpServers": null,
  "messages": null,
  "model": null,
  "responseFormat": null,
  "stream": null,
  "streamOptions": null,
  "temperature": null,
  "toolChoice": null,
  "tools": null,
  "toolsHeader": null,
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


