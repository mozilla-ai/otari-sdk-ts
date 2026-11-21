
# CCKModerationInputModerationResults

Successful moderation results for the request input or generated output.

## Properties

Name | Type
------------ | -------------
`model` | string
`results` | [Array&lt;CCKModerationInputModerationResultsResult&gt;](CCKModerationInputModerationResultsResult.md)
`type` | string

## Example

```typescript
import type { CCKModerationInputModerationResults } from ''

// TODO: Update the object below with actual values
const example = {
  "model": null,
  "results": null,
  "type": null,
} satisfies CCKModerationInputModerationResults

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCKModerationInputModerationResults
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


