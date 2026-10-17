
# ToolChargeLine

A gateway-run tool\'s charge line, one per tool and label.  A subclass with ``label`` required, rather than a defaulted field on :class:`UnitChargeLine`, so the per-request, rerank and image lines, and a stored tool line without a label, serialize back without a ``\"label\": null`` they never had.

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


