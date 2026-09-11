
# GuardrailCatalog

The profiles a guardrail entry may name, or why they could not be listed.

## Properties

Name | Type
------------ | -------------
`available` | boolean
`profiles` | [Array&lt;GuardrailProfileSpec&gt;](GuardrailProfileSpec.md)
`reason` | string

## Example

```typescript
import type { GuardrailCatalog } from ''

// TODO: Update the object below with actual values
const example = {
  "available": null,
  "profiles": null,
  "reason": null,
} satisfies GuardrailCatalog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuardrailCatalog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


