
# CountTokensRequest

Anthropic ``/v1/messages/count_tokens`` request.  A subset of :class:`MessagesRequest`: the input fields that affect the token count, minus ``max_tokens`` and the streaming/sampling controls, since the endpoint only counts input tokens. Clients such as Claude Code call this on every turn to keep their prompt within the model\'s context window.

## Properties

Name | Type
------------ | -------------
`cacheControl` | { [key: string]: any; }
`messages` | Array&lt;{ [key: string]: any; } | null&gt;
`metadata` | { [key: string]: any; }
`model` | string
`system` | [System](System.md)
`thinking` | { [key: string]: any; }
`toolChoice` | { [key: string]: any; }
`tools` | Array&lt;{ [key: string]: any; }&gt;

## Example

```typescript
import type { CountTokensRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheControl": null,
  "messages": null,
  "metadata": null,
  "model": null,
  "system": null,
  "thinking": null,
  "toolChoice": null,
  "tools": null,
} satisfies CountTokensRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CountTokensRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


