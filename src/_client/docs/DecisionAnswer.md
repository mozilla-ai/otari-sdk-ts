
# DecisionAnswer

One question\'s answer. Which value field is set follows ``type``.

## Properties

Name | Type
------------ | -------------
`choice` | string
`confidence` | number
`legend` | { [key: string]: any; }
`noul` | number
`probabilities` | { [key: string]: number; }
`score` | number
`type` | string

## Example

```typescript
import type { DecisionAnswer } from ''

// TODO: Update the object below with actual values
const example = {
  "choice": null,
  "confidence": null,
  "legend": null,
  "noul": null,
  "probabilities": null,
  "score": null,
  "type": null,
} satisfies DecisionAnswer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DecisionAnswer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


