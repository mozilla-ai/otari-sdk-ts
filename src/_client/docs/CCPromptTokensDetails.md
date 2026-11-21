
# CCPromptTokensDetails

OpenAI prompt token breakdown extended with the TTL split of cache writes.  As in OpenAI, ``cached_tokens`` and ``cache_write_tokens`` are subsets of ``prompt_tokens``.

## Properties

Name | Type
------------ | -------------
`audioTokens` | number
`cacheWriteTokens` | number
`cachedTokens` | number
`imageTokens` | number
`textTokens` | number
`cacheCreationTokenDetails` | [CCCacheCreationTokenDetails](CCCacheCreationTokenDetails.md)

## Example

```typescript
import type { CCPromptTokensDetails } from ''

// TODO: Update the object below with actual values
const example = {
  "audioTokens": null,
  "cacheWriteTokens": null,
  "cachedTokens": null,
  "imageTokens": null,
  "textTokens": null,
  "cacheCreationTokenDetails": null,
} satisfies CCPromptTokensDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCPromptTokensDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


