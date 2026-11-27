
# HostedPriceResetRequest

Put models an operator priced back on the default rate.  ``models`` names them; null means every model, narrowed to ``vendor`` when one is given. ``dry_run`` answers what a reset would change and writes nothing.

## Properties

Name | Type
------------ | -------------
`dryRun` | boolean
`models` | Array&lt;string&gt;
`vendor` | string

## Example

```typescript
import type { HostedPriceResetRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "dryRun": null,
  "models": null,
  "vendor": null,
} satisfies HostedPriceResetRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedPriceResetRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


