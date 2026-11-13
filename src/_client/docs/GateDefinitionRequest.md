
# GateDefinitionRequest

One gate of a guardrail version: what it is, when it runs, and what it says when it fails.

## Properties

Name | Type
------------ | -------------
`enforcement` | string
`gateId` | string
`gateType` | string
`message` | string
`origin` | string
`runs` | Array&lt;string&gt;

## Example

```typescript
import type { GateDefinitionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "enforcement": null,
  "gateId": null,
  "gateType": null,
  "message": null,
  "origin": null,
  "runs": null,
} satisfies GateDefinitionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GateDefinitionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


