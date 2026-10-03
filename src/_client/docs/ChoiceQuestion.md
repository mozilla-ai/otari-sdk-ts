
# ChoiceQuestion

A question answered with one of the named options.

## Properties

Name | Type
------------ | -------------
`criteria` | [{ [key: string]: CriteriaValue; }](CriteriaValue.md)
`instructions` | [Instructions](Instructions.md)
`type` | string

## Example

```typescript
import type { ChoiceQuestion } from ''

// TODO: Update the object below with actual values
const example = {
  "criteria": null,
  "instructions": null,
  "type": null,
} satisfies ChoiceQuestion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChoiceQuestion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


