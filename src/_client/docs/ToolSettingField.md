
# ToolSettingField

One editable tool/guardrail field surfaced to the dashboard.

## Properties

Name | Type
------------ | -------------
`description` | string
`key` | string
`service` | string
`type` | string
`value` | [Value1](Value1.md)

## Example

```typescript
import type { ToolSettingField } from ''

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "key": null,
  "service": null,
  "type": null,
  "value": null,
} satisfies ToolSettingField

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ToolSettingField
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


