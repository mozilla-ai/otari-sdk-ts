
# GuardrailDefinitionRequest


## Properties

Name | Type
------------ | -------------
`digest` | string
`gates` | [Array&lt;GateDefinitionRequest&gt;](GateDefinitionRequest.md)

## Example

```typescript
import type { GuardrailDefinitionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "digest": null,
  "gates": null,
} satisfies GuardrailDefinitionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuardrailDefinitionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


