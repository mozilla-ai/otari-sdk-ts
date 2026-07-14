
# McpServerConfig

Inline MCP server configuration accepted on the chat completions request.  Streamable HTTP transport. The `url` must be reachable from the gateway process.  URL safety (SSRF guard against private/link-local/reserved IP ranges, plus rejecting plain ``http://`` when ``authorization_token`` is set) is enforced by :func:`gateway.services.url_safety.validate_mcp_url`, called from the async request pipeline (``prepare_gateway_tools``) rather than here at parse time: the safety check does a DNS lookup, which must be awaited so it can\'t block the event loop, and Pydantic validators run synchronously during request-body parsing.

## Properties

Name | Type
------------ | -------------
`allowedTools` | Array&lt;string&gt;
`authorizationToken` | string
`name` | string
`purposeHint` | string
`url` | string

## Example

```typescript
import type { McpServerConfig } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedTools": null,
  "authorizationToken": null,
  "name": null,
  "purposeHint": null,
  "url": null,
} satisfies McpServerConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpServerConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


