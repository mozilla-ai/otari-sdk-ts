
# VariantLicense

License governing a single model variant of a guardrail.  Used where a guardrail\'s ``SUPPORTED_MODELS`` span several base models with different governing licenses (e.g. Llama Guard\'s 3.2 / 3.1 / 4 variants, or PolyGuard\'s non-commercial Ministral vs Apache Qwen variants), so a single ``default_license`` string cannot capture per-variant redistribution terms. Instances are frozen, so a ``tuple`` of them keeps :class:`GuardrailMetadata` hashable.

## Properties

Name | Type
------------ | -------------
`license` | string
`modelId` | string

## Example

```typescript
import type { VariantLicense } from ''

// TODO: Update the object below with actual values
const example = {
  "license": null,
  "modelId": null,
} satisfies VariantLicense

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VariantLicense
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


