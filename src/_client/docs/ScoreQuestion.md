
# ScoreQuestion

A question answered with a level on an ordered scale.

## Properties

Name | Type
------------ | -------------
`criteria` | [Array&lt;CriteriaInner&gt;](CriteriaInner.md)
`instructions` | [Instructions1](Instructions1.md)
`type` | string

## Example

```typescript
import type { ScoreQuestion } from ''

// TODO: Update the object below with actual values
const example = {
  "criteria": null,
  "instructions": null,
  "type": null,
} satisfies ScoreQuestion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScoreQuestion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


