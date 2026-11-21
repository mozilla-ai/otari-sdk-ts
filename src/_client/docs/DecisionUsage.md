
# DecisionUsage

Token counts the provider reported, plus its own cost where it reports one.

## Properties

Name | Type
------------ | -------------
`cost` | number
`inputTokens` | number
`outputTokens` | number

## Example

```typescript
import type { DecisionUsage } from ''

// TODO: Update the object below with actual values
const example = {
  "cost": null,
  "inputTokens": null,
  "outputTokens": null,
} satisfies DecisionUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DecisionUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


