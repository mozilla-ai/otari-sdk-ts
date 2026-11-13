
# KeyBudgetPublic

What the calling key may still spend, and every cap that decides it.

## Properties

Name | Type
------------ | -------------
`budgetsEnforced` | boolean
`limits` | [Array&lt;KeyLimitPublic&gt;](KeyLimitPublic.md)
`remainingUsd` | number

## Example

```typescript
import type { KeyBudgetPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "budgetsEnforced": null,
  "limits": null,
  "remainingUsd": null,
} satisfies KeyBudgetPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KeyBudgetPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


