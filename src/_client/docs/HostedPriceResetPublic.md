
# HostedPriceResetPublic

What a price reset changed, or would change on a dry run.  ``changes`` lists every operator-priced model the default rung prices, ``matches`` marking one whose price is already the default; a price the configuration stored is never listed. ``skipped_no_default`` names the operator-priced models the default rung does not price, which keep their price. ``applied`` is true only when a reset wrote something.

## Properties

Name | Type
------------ | -------------
`applied` | boolean
`changes` | [Array&lt;HostedPriceResetChangePublic&gt;](HostedPriceResetChangePublic.md)
`skippedNoDefault` | Array&lt;string&gt;

## Example

```typescript
import type { HostedPriceResetPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "applied": null,
  "changes": null,
  "skippedNoDefault": null,
} satisfies HostedPriceResetPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedPriceResetPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


