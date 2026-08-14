
# ExplainResponse

The plan a policy compiles to for the given inputs.

## Properties

Name | Type
------------ | -------------
`candidates` | [Array&lt;CandidateResponse&gt;](CandidateResponse.md)
`dropped` | [Array&lt;DroppedResponse&gt;](DroppedResponse.md)
`guardrails` | Array&lt;{ [key: string]: any; } | null&gt;
`isDynamic` | boolean
`name` | string
`routerBackend` | string
`routerCandidates` | Array&lt;string&gt;
`routerWeights` | { [key: string]: number; }
`selectionReason` | string

## Example

```typescript
import type { ExplainResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "candidates": null,
  "dropped": null,
  "guardrails": null,
  "isDynamic": null,
  "name": null,
  "routerBackend": null,
  "routerCandidates": null,
  "routerWeights": null,
  "selectionReason": null,
} satisfies ExplainResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExplainResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


