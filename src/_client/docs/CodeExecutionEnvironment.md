
# CodeExecutionEnvironment

A sandbox environment a direct code execution may name: what it contains, and what a run in it costs.

## Properties

Name | Type
------------ | -------------
`_default` | boolean
`description` | string
`label` | string
`name` | string
`object` | string
`pricePerRun` | number

## Example

```typescript
import type { CodeExecutionEnvironment } from ''

// TODO: Update the object below with actual values
const example = {
  "_default": null,
  "description": null,
  "label": null,
  "name": null,
  "object": null,
  "pricePerRun": null,
} satisfies CodeExecutionEnvironment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CodeExecutionEnvironment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


