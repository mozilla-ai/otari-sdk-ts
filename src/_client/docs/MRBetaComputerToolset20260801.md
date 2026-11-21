
# MRBetaComputerToolset20260801

The computer toolset: a single ``tools[]`` entry (carrying no ``name``) that declares the computer tool family. The model is served the family\'s tool with any members disabled via ``configs`` removed from its schema. Every member is enabled by default, zoom included. The single-tool options ``display_number`` and ``enable_zoom`` are not fields of a toolset entry — it carries only ``type``, ``configs``, and ``cache_control``; zoom is controlled via ``configs.zoom.enabled``.

## Properties

Name | Type
------------ | -------------
`type` | string
`cacheControl` | [MRBetaCacheControlEphemeral](MRBetaCacheControlEphemeral.md)
`configs` | [MRBetaComputerToolsetConfigs](MRBetaComputerToolsetConfigs.md)

## Example

```typescript
import type { MRBetaComputerToolset20260801 } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "cacheControl": null,
  "configs": null,
} satisfies MRBetaComputerToolset20260801

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaComputerToolset20260801
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


