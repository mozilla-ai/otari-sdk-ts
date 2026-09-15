
# PlaygroundComparisonSummary

A row in the comparison history: the question, the pair, the verdict.  Deliberately without the two answers. The list shows a dozen rows at once and none of them renders an answer body, so sending them would move megabytes to draw a few lines of text. There is no detail endpoint either, because the page has no screen that reads one back: a comparison is a judgment that was recorded, not a transcript to resume.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`id` | string
`modelA` | string
`modelB` | string
`preference` | string
`userQuestion` | string
`workspaceId` | string

## Example

```typescript
import type { PlaygroundComparisonSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "id": null,
  "modelA": null,
  "modelB": null,
  "preference": null,
  "userQuestion": null,
  "workspaceId": null,
} satisfies PlaygroundComparisonSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundComparisonSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


