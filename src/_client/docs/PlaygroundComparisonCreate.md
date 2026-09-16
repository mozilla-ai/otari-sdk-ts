
# PlaygroundComparisonCreate

One rated A/B exchange.  Both answers in full, which is the disclosure the comparison consent flag covers: a preference with no answers attached is a datum nobody can later check, and the page\'s own history list shows the question and the two model ids from these columns.

## Properties

Name | Type
------------ | -------------
`modelA` | string
`modelAAnswer` | string
`modelB` | string
`modelBAnswer` | string
`preference` | string
`userQuestion` | string
`workspaceId` | string

## Example

```typescript
import type { PlaygroundComparisonCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "modelA": null,
  "modelAAnswer": null,
  "modelB": null,
  "modelBAnswer": null,
  "preference": null,
  "userQuestion": null,
  "workspaceId": null,
} satisfies PlaygroundComparisonCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundComparisonCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


