
# ChatCompletion


## Properties

Name | Type
------------ | -------------
`id` | string
`choices` | [Array&lt;CCChoice&gt;](CCChoice.md)
`created` | number
`model` | string
`object` | string
`serviceTier` | string
`systemFingerprint` | string
`usage` | [CCCompletionUsage](CCCompletionUsage.md)

## Example

```typescript
import type { ChatCompletion } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "choices": null,
  "created": null,
  "model": null,
  "object": null,
  "serviceTier": null,
  "systemFingerprint": null,
  "usage": null,
} satisfies ChatCompletion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatCompletion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


