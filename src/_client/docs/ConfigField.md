
# ConfigField

One effective config value surfaced to the dashboard\'s config viewer.

## Properties

Name | Type
------------ | -------------
`description` | string
`exclusiveMinimum` | number
`group` | string
`key` | string
`minimum` | number
`options` | Array&lt;string&gt;
`settable` | boolean
`type` | string
`value` | [Value](Value.md)

## Example

```typescript
import type { ConfigField } from ''

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "exclusiveMinimum": null,
  "group": null,
  "key": null,
  "minimum": null,
  "options": null,
  "settable": null,
  "type": null,
  "value": null,
} satisfies ConfigField

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConfigField
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


