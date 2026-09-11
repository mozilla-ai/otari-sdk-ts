
# ToolMeter

One gateway-run tool\'s call counts on a request.  A TypedDict rather than a model, and every key optional, so a stored entry serializes back as it was written: a model with defaults would put ``\"unit_rate\": null`` on every tool that has never been priced.

## Properties

Name | Type
------------ | -------------
`billed` | number
`errors` | number
`unitRate` | number

## Example

```typescript
import type { ToolMeter } from ''

// TODO: Update the object below with actual values
const example = {
  "billed": null,
  "errors": null,
  "unitRate": null,
} satisfies ToolMeter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ToolMeter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


