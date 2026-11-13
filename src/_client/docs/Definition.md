
# Definition


## Properties

Name | Type
------------ | -------------
`inputSchema` | [MRBetaResponseToolInputSchema](MRBetaResponseToolInputSchema.md)
`name` | string
`allowedCallers` | Array&lt;string&gt;
`deferLoading` | boolean
`description` | string
`eagerInputStreaming` | boolean
`inputExamples` | Array&lt;{ [key: string]: any; }&gt;
`strict` | boolean
`type` | string
`cacheControl` | [MRBetaCacheControlEphemeral](MRBetaCacheControlEphemeral.md)
`configs` | [{ [key: string]: MRBetaMCPToolConfig; }](MRBetaMCPToolConfig.md)
`displayHeightPx` | number
`displayWidthPx` | number
`displayNumber` | number
`enableZoom` | boolean
`maxCharacters` | number
`allowedDomains` | Array&lt;string&gt;
`blockedDomains` | Array&lt;string&gt;
`maxUses` | number
`userLocation` | [MRBetaUserLocation](MRBetaUserLocation.md)
`citations` | [MRBetaCitationsConfigParam](MRBetaCitationsConfigParam.md)
`maxContentTokens` | number
`urlSources` | [MRBetaWebFetchURLSources](MRBetaWebFetchURLSources.md)
`useCache` | boolean
`responseInclusion` | string
`model` | [Model1](Model1.md)
`caching` | [MRBetaCacheControlEphemeral](MRBetaCacheControlEphemeral.md)
`maxTokens` | number
`mcpServerName` | string
`defaultConfig` | [MRBetaMCPToolDefaultConfig](MRBetaMCPToolDefaultConfig.md)
`tools` | [Array&lt;MRBetaMCPToolParam&gt;](MRBetaMCPToolParam.md)

## Example

```typescript
import type { Definition } from ''

// TODO: Update the object below with actual values
const example = {
  "inputSchema": null,
  "name": null,
  "allowedCallers": null,
  "deferLoading": null,
  "description": null,
  "eagerInputStreaming": null,
  "inputExamples": null,
  "strict": null,
  "type": null,
  "cacheControl": null,
  "configs": null,
  "displayHeightPx": null,
  "displayWidthPx": null,
  "displayNumber": null,
  "enableZoom": null,
  "maxCharacters": null,
  "allowedDomains": null,
  "blockedDomains": null,
  "maxUses": null,
  "userLocation": null,
  "citations": null,
  "maxContentTokens": null,
  "urlSources": null,
  "useCache": null,
  "responseInclusion": null,
  "model": null,
  "caching": null,
  "maxTokens": null,
  "mcpServerName": null,
  "defaultConfig": null,
  "tools": null,
} satisfies Definition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Definition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


