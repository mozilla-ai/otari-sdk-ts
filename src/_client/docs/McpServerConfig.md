
# McpServerConfig

Inline MCP server configuration accepted on the chat completions request.  Streamable HTTP transport. The `url` must be reachable from the gateway process.  URL safety is enforced at parse time:  * SSRF guard rejects private, link-local, and reserved IP ranges. Loopback is   allowed by default (sidecars, dev) — set ``OTARI_MCP_ALLOW_LOOPBACK=false`` to disable. * Plain ``http://`` is rejected when ``authorization_token`` is set, to keep   bearer tokens off the wire in cleartext.

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


