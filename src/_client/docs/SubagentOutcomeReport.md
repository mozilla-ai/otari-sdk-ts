
# SubagentOutcomeReport

What the subagent a recommendation started has consumed so far, in total.  Each report replaces the one before it, so a harness sends running totals and may send them more than once.

## Properties

Name | Type
------------ | -------------
`usage` | [Array&lt;SubagentUsageLine&gt;](SubagentUsageLine.md)

## Example

```typescript
import type { SubagentOutcomeReport } from ''

// TODO: Update the object below with actual values
const example = {
  "usage": null,
} satisfies SubagentOutcomeReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubagentOutcomeReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


