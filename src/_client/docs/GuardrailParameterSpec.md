
# GuardrailParameterSpec

One ``validate_kwargs`` key a profile accepts, typed for a form control.

## Properties

Name | Type
------------ | -------------
`choices` | Array&lt;string&gt;
`_default` | any
`description` | string
`name` | string
`required` | boolean
`secret` | boolean
`type` | string

## Example

```typescript
import type { GuardrailParameterSpec } from ''

// TODO: Update the object below with actual values
const example = {
  "choices": null,
  "_default": null,
  "description": null,
  "name": null,
  "required": null,
  "secret": null,
  "type": null,
} satisfies GuardrailParameterSpec

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuardrailParameterSpec
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


