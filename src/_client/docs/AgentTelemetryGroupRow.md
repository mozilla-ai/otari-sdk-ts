
# AgentTelemetryGroupRow

One group of a grouped series. ``key`` is null for the ``other`` fold and for a real group whose column is NULL (e.g. a since-deleted user); ``is_other`` separates the two.

## Properties

Name | Type
------------ | -------------
`isOther` | boolean
`key` | string
`rows` | number

## Example

```typescript
import type { AgentTelemetryGroupRow } from ''

// TODO: Update the object below with actual values
const example = {
  "isOther": null,
  "key": null,
  "rows": null,
} satisfies AgentTelemetryGroupRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentTelemetryGroupRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


