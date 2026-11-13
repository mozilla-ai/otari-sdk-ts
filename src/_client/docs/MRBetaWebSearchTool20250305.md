
# MRBetaWebSearchTool20250305


## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`allowedCallers` | Array&lt;string&gt;
`allowedDomains` | Array&lt;string&gt;
`blockedDomains` | Array&lt;string&gt;
`cacheControl` | [MRBetaCacheControlEphemeral](MRBetaCacheControlEphemeral.md)
`deferLoading` | boolean
`maxUses` | number
`strict` | boolean
`userLocation` | [MRBetaUserLocation](MRBetaUserLocation.md)

## Example

```typescript
import type { MRBetaWebSearchTool20250305 } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "type": null,
  "allowedCallers": null,
  "allowedDomains": null,
  "blockedDomains": null,
  "cacheControl": null,
  "deferLoading": null,
  "maxUses": null,
  "strict": null,
  "userLocation": null,
} satisfies MRBetaWebSearchTool20250305

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaWebSearchTool20250305
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


