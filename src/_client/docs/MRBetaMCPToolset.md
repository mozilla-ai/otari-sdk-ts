
# MRBetaMCPToolset

Configuration for a group of tools from an MCP server.  Allows configuring enabled status and defer_loading for all tools from an MCP server, with optional per-tool overrides.

## Properties

Name | Type
------------ | -------------
`mcpServerName` | string
`type` | string
`cacheControl` | [MRBetaCacheControlEphemeral](MRBetaCacheControlEphemeral.md)
`configs` | [{ [key: string]: MRBetaMCPToolConfig; }](MRBetaMCPToolConfig.md)
`defaultConfig` | [MRBetaMCPToolDefaultConfig](MRBetaMCPToolDefaultConfig.md)
`tools` | [Array&lt;MRBetaMCPToolParam&gt;](MRBetaMCPToolParam.md)

## Example

```typescript
import type { MRBetaMCPToolset } from ''

// TODO: Update the object below with actual values
const example = {
  "mcpServerName": null,
  "type": null,
  "cacheControl": null,
  "configs": null,
  "defaultConfig": null,
  "tools": null,
} satisfies MRBetaMCPToolset

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaMCPToolset
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


