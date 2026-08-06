
# CandidateResponse

One candidate in a compiled plan.

## Properties

Name | Type
------------ | -------------
`dispatchModel` | string
`instance` | string
`model` | string
`position` | number
`selectionReason` | string

## Example

```typescript
import type { CandidateResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "dispatchModel": null,
  "instance": null,
  "model": null,
  "position": null,
  "selectionReason": null,
} satisfies CandidateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CandidateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


