
# RequirementGroup

A guardrail-level \"at least one of these must be provided\" constraint.  Some guardrails require *a value* that no single parameter\'s :attr:`ParameterSpec.required` or :attr:`ParameterSpec.effectively_required` can express, because it can be satisfied by any of several parameters — e.g. watsonx needs a ``project_id`` *or* a ``space_id``. Each group names the interchangeable parameters (and any environment variables that also satisfy it); a config UI should require the user to supply at least one member.

## Properties

Name | Type
------------ | -------------
`description` | string
`envVars` | Array&lt;string&gt;
`parameters` | Array&lt;string&gt;

## Example

```typescript
import type { RequirementGroup } from ''

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "envVars": null,
  "parameters": null,
} satisfies RequirementGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RequirementGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


