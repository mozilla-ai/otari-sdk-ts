
# ScoredExample

One prompt and how well each candidate answered it.

## Properties

Name | Type
------------ | -------------
`labelSource` | string
`prompt` | string
`scores` | { [key: string]: number; }
`taskId` | string

## Example

```typescript
import type { ScoredExample } from ''

// TODO: Update the object below with actual values
const example = {
  "labelSource": null,
  "prompt": null,
  "scores": null,
  "taskId": null,
} satisfies ScoredExample

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScoredExample
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


