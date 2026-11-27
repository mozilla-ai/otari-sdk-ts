
# MRBetaBrowserToolset20260801

The browser toolset: a single ``tools[]`` entry (carrying no ``name``) that declares the browser tool family. The model is served the family\'s tool with any members disabled via ``configs`` removed from its schema.

## Properties

Name | Type
------------ | -------------
`type` | string
`cacheControl` | [MRBetaCacheControlEphemeral](MRBetaCacheControlEphemeral.md)
`configs` | [MRBetaBrowserToolsetConfigs](MRBetaBrowserToolsetConfigs.md)

## Example

```typescript
import type { MRBetaBrowserToolset20260801 } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "cacheControl": null,
  "configs": null,
} satisfies MRBetaBrowserToolset20260801

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaBrowserToolset20260801
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


