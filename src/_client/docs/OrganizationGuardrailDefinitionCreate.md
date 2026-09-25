
# OrganizationGuardrailDefinitionCreate

Request body for defining a guardrail Otari will build and call itself.  ``create_kwargs`` carries both halves of the form: the plain arguments and the vendor credentials. Which is which is the catalog\'s answer, not this schema\'s, so a credential lands in the encrypted map whatever it is called and a caller cannot move one into the plain column by naming it oddly.  Per-call arguments are not offered. This row says what a guardrail is built with; what travels with each check is the mandate\'s ``validate_kwargs``.

## Properties

Name | Type
------------ | -------------
`createKwargs` | { [key: string]: any; }
`enabled` | boolean
`guardrailName` | string
`name` | string

## Example

```typescript
import type { OrganizationGuardrailDefinitionCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "createKwargs": null,
  "enabled": null,
  "guardrailName": null,
  "name": null,
} satisfies OrganizationGuardrailDefinitionCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationGuardrailDefinitionCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


