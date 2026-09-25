
# OrganizationGuardrailTestResult

The guardrails service\'s verdict on the text, in the fields a request\'s check reports.

## Properties

Name | Type
------------ | -------------
`explanation` | string
`score` | number
`valid` | boolean

## Example

```typescript
import type { OrganizationGuardrailTestResult } from ''

// TODO: Update the object below with actual values
const example = {
  "explanation": null,
  "score": null,
  "valid": null,
} satisfies OrganizationGuardrailTestResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationGuardrailTestResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


