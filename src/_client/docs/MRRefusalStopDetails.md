
# MRRefusalStopDetails

Structured information about a refusal.

## Properties

Name | Type
------------ | -------------
`category` | string
`explanation` | string
`type` | string

## Example

```typescript
import type { MRRefusalStopDetails } from ''

// TODO: Update the object below with actual values
const example = {
  "category": null,
  "explanation": null,
  "type": null,
} satisfies MRRefusalStopDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRRefusalStopDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


