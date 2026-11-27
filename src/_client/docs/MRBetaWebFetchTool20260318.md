
# MRBetaWebFetchTool20260318


## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`allowedCallers` | Array&lt;string&gt;
`allowedDomains` | Array&lt;string&gt;
`blockedDomains` | Array&lt;string&gt;
`cacheControl` | [MRBetaCacheControlEphemeral](MRBetaCacheControlEphemeral.md)
`citations` | [MRBetaCitationsConfigParam](MRBetaCitationsConfigParam.md)
`deferLoading` | boolean
`maxContentTokens` | number
`maxUses` | number
`responseInclusion` | string
`strict` | boolean
`urlSources` | [MRBetaWebFetchURLSources](MRBetaWebFetchURLSources.md)
`useCache` | boolean

## Example

```typescript
import type { MRBetaWebFetchTool20260318 } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "type": null,
  "allowedCallers": null,
  "allowedDomains": null,
  "blockedDomains": null,
  "cacheControl": null,
  "citations": null,
  "deferLoading": null,
  "maxContentTokens": null,
  "maxUses": null,
  "responseInclusion": null,
  "strict": null,
  "urlSources": null,
  "useCache": null,
} satisfies MRBetaWebFetchTool20260318

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaWebFetchTool20260318
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


