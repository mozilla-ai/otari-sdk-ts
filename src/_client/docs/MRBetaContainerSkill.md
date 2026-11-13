
# MRBetaContainerSkill

A skill that was loaded in a container (response model).

## Properties

Name | Type
------------ | -------------
`skillId` | string
`type` | string
`version` | string

## Example

```typescript
import type { MRBetaContainerSkill } from ''

// TODO: Update the object below with actual values
const example = {
  "skillId": null,
  "type": null,
  "version": null,
} satisfies MRBetaContainerSkill

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaContainerSkill
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


