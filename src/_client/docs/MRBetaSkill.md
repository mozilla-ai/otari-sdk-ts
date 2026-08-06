
# MRBetaSkill

A skill that was loaded in a container (response model).

## Properties

Name | Type
------------ | -------------
`skillId` | string
`type` | string
`version` | string

## Example

```typescript
import type { MRBetaSkill } from ''

// TODO: Update the object below with actual values
const example = {
  "skillId": null,
  "type": null,
  "version": null,
} satisfies MRBetaSkill

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaSkill
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


