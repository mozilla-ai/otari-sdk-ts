
# OutputShape

The decision form a guardrail produces (aligns with the populated ``GuardrailOutput`` fields).  ``SCORE`` and ``RUBRIC`` are also the queryable signal for whether ``GuardrailOutput.score`` can ever be populated: a guardrail declaring **neither** always leaves ``score`` as ``None`` (it only emits a categorical/binary verdict, not a calibrated risk value). A guardrail declaring **either** populates ``score`` in the common, successfully-parsed case, but individual guardrails may still leave it ``None`` in specific edge cases (e.g. a fail-closed parse-failure path, or a guardrail that flags something but has nothing to score) — consult the guardrail\'s own docstring for those exceptions.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { OutputShape } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies OutputShape

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutputShape
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


