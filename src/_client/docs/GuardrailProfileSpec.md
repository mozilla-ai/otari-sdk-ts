
# GuardrailProfileSpec

One profile the operator\'s guardrails service has built.

## Properties

Name | Type
------------ | -------------
`guardrail` | string
`modelId` | string
`parameters` | [Array&lt;GuardrailParameterSpec&gt;](GuardrailParameterSpec.md)
`parametersKnown` | boolean
`profile` | string

## Example

```typescript
import type { GuardrailProfileSpec } from ''

// TODO: Update the object below with actual values
const example = {
  "guardrail": null,
  "modelId": null,
  "parameters": null,
  "parametersKnown": null,
  "profile": null,
} satisfies GuardrailProfileSpec

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuardrailProfileSpec
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


