
# CCModerationInputModerationResults

Successful moderation results for the request input or generated output.

## Properties

Name | Type
------------ | -------------
`model` | string
`results` | [Array&lt;CCModerationInputModerationResultsResult&gt;](CCModerationInputModerationResultsResult.md)
`type` | string

## Example

```typescript
import type { CCModerationInputModerationResults } from ''

// TODO: Update the object below with actual values
const example = {
  "model": null,
  "results": null,
  "type": null,
} satisfies CCModerationInputModerationResults

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCModerationInputModerationResults
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


