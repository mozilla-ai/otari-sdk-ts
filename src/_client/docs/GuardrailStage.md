
# GuardrailStage

Where in a request/response flow a guardrail runs.  A guardrail that screens both the prompt and the response has ``stages == {INPUT, OUTPUT}`` (there is no separate ``EITHER`` value). ``RAG_CONTEXT`` marks guardrails that additionally consume retrieved documents/context.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { GuardrailStage } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies GuardrailStage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuardrailStage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


