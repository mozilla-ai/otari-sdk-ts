
# CheckVerdictRequest

One verifier gate\'s verdict, as the caller\'s own verifier run produced it.  Mirrors ``JudgeVerdictRequest`` field-for-field: ``gate_id`` echoes back the gate the policy itself named (same bound, same reason), ``outcome`` is the caller\'s own report of the verifier\'s exit code (0/1/anything else, mapped by the caller to pass/fail/error), and ``detail`` is the verifier\'s captured stdout, capped the same way ``reasoning`` is.

## Properties

Name | Type
------------ | -------------
`detail` | string
`gateId` | string
`outcome` | string

## Example

```typescript
import type { CheckVerdictRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "detail": null,
  "gateId": null,
  "outcome": null,
} satisfies CheckVerdictRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckVerdictRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


