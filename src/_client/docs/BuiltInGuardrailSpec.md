
# BuiltInGuardrailSpec

One guardrail this gateway can construct and run itself.  Upstream\'s own metadata model, extended rather than copied, so a field it adds is carried instead of waiting on an edit here. The four taxonomy enums document themselves in the published schema, which is why almost nothing below restates what a field name and its type already say; the descriptions that remain are on the answers only this gateway can give.  Inheriting also takes upstream\'s field serializers, which sort every set-valued field on the way out, so the JSON is stable across calls without sorting anything here.

## Properties

Name | Type
------------ | -------------
`alternateBackends` | Array&lt;string&gt;
`backend` | [BackendType](BackendType.md)
`categories` | Array&lt;string&gt;
`createParameters` | [Array&lt;GuardrailParameterSpec&gt;](GuardrailParameterSpec.md)
`defaultLicense` | string
`description` | string
`displayName` | string
`guardrailName` | string
`missingExtra` | string
`multilingual` | boolean
`multimodal` | boolean
`optionalValidateKwargs` | Array&lt;string&gt;
`outputShapes` | Array&lt;string&gt;
`primaryCategory` | [GuardrailCategory](GuardrailCategory.md)
`requiredValidateKwargs` | Array&lt;string&gt;
`requirementGroups` | [Array&lt;RequirementGroup&gt;](RequirementGroup.md)
`requiresApiKey` | boolean
`runnable` | boolean
`stages` | Array&lt;string&gt;
`supportsBatch` | boolean
`validateParameters` | [Array&lt;GuardrailParameterSpec&gt;](GuardrailParameterSpec.md)
`variantLicenses` | Array&lt;{ [key: string]: string; }&gt;
`vendor` | string

## Example

```typescript
import type { BuiltInGuardrailSpec } from ''

// TODO: Update the object below with actual values
const example = {
  "alternateBackends": null,
  "backend": null,
  "categories": null,
  "createParameters": null,
  "defaultLicense": null,
  "description": null,
  "displayName": null,
  "guardrailName": null,
  "missingExtra": null,
  "multilingual": null,
  "multimodal": null,
  "optionalValidateKwargs": null,
  "outputShapes": null,
  "primaryCategory": null,
  "requiredValidateKwargs": null,
  "requirementGroups": null,
  "requiresApiKey": null,
  "runnable": null,
  "stages": null,
  "supportsBatch": null,
  "validateParameters": null,
  "variantLicenses": null,
  "vendor": null,
} satisfies BuiltInGuardrailSpec

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BuiltInGuardrailSpec
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


