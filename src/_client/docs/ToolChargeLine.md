
# ToolChargeLine

A gateway-run tool\'s charge line, one per tool, label and payer.  A subclass with ``label`` required, rather than a defaulted field on :class:`UnitChargeLine`, so the per-request, rerank and image lines, and a stored tool line without a label, serialize back without a ``\"label\": null`` they never had.  A line written since tools are charged by whose account ran them also carries ``deployment_paid``: true where the deployment\'s account ran the calls, which charges the organization\'s funds where the deployment bills them, and false where the organization\'s own key did. It is kept as an extra key rather than declared, so an older line serializes back without it.

## Properties

Name | Type
------------ | -------------
`cost` | number
`label` | string
`meter` | string
`unitRate` | number
`units` | [Units1](Units1.md)

## Example

```typescript
import type { ToolChargeLine } from ''

// TODO: Update the object below with actual values
const example = {
  "cost": null,
  "label": null,
  "meter": null,
  "unitRate": null,
  "units": null,
} satisfies ToolChargeLine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ToolChargeLine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


