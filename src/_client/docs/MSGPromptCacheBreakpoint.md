
# MSGPromptCacheBreakpoint

Marks the exact end of a reusable prompt prefix.  When `ttl` is omitted, the breakpoint inherits the request\'s `prompt_cache_options.ttl`; the boundary is not rounded to a token block.

## Properties

Name | Type
------------ | -------------
`mode` | string
`ttl` | string

## Example

```typescript
import type { MSGPromptCacheBreakpoint } from ''

// TODO: Update the object below with actual values
const example = {
  "mode": null,
  "ttl": null,
} satisfies MSGPromptCacheBreakpoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MSGPromptCacheBreakpoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


