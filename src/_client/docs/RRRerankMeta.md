
# RRRerankMeta

Provider-specific billing metadata (optional, preserved as-is).

## Properties

Name | Type
------------ | -------------
`billedUnits` | { [key: string]: number; }
`tokens` | { [key: string]: number; }

## Example

```typescript
import type { RRRerankMeta } from ''

// TODO: Update the object below with actual values
const example = {
  "billedUnits": null,
  "tokens": null,
} satisfies RRRerankMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RRRerankMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


