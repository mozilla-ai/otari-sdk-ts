
# BuiltInGuardrailCatalog

Every guardrail this gateway ships, whether or not it can currently run it.

## Properties

Name | Type
------------ | -------------
`guardrails` | [Array&lt;BuiltInGuardrailSpec&gt;](BuiltInGuardrailSpec.md)

## Example

```typescript
import type { BuiltInGuardrailCatalog } from ''

// TODO: Update the object below with actual values
const example = {
  "guardrails": null,
} satisfies BuiltInGuardrailCatalog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BuiltInGuardrailCatalog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


