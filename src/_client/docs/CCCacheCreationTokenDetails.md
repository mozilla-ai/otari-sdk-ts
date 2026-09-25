
# CCCacheCreationTokenDetails

Cache writes split by time-to-live, as Anthropic reports them.

## Properties

Name | Type
------------ | -------------
`ephemeral5mInputTokens` | number
`ephemeral1hInputTokens` | number

## Example

```typescript
import type { CCCacheCreationTokenDetails } from ''

// TODO: Update the object below with actual values
const example = {
  "ephemeral5mInputTokens": null,
  "ephemeral1hInputTokens": null,
} satisfies CCCacheCreationTokenDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCCacheCreationTokenDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


