
# ModerationResult

A single moderation decision, typically one per input item.

## Properties

Name | Type
------------ | -------------
`categories` | { [key: string]: boolean; }
`categoryAppliedInputTypes` | { [key: string]: Array&lt;string&gt;; }
`categoryScores` | { [key: string]: number; }
`flagged` | boolean
`providerRaw` | { [key: string]: any; }

## Example

```typescript
import type { ModerationResult } from ''

// TODO: Update the object below with actual values
const example = {
  "categories": null,
  "categoryAppliedInputTypes": null,
  "categoryScores": null,
  "flagged": null,
  "providerRaw": null,
} satisfies ModerationResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModerationResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


