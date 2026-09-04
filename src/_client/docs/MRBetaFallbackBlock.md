
# MRBetaFallbackBlock

Marks the point in `content` where one model\'s output gives way to the next.  One block appears per hop where a preceding model actually ran this turn and declined. A turn where no preceding model ran and declined has no such boundary and carries no block — the signal for whether a fallback model served the response is the presence of a `fallback_message` entry in `usage.iterations`, not this block.  The block is treated like a server-tool content block for streaming: it arrives via the standard `content_block_start` / `content_block_stop` pair and carries no deltas.

## Properties

Name | Type
------------ | -------------
`from` | [MRBetaFallbackInfo](MRBetaFallbackInfo.md)
`to` | [MRBetaFallbackInfo](MRBetaFallbackInfo.md)
`trigger` | [MRBetaFallbackRefusalTrigger](MRBetaFallbackRefusalTrigger.md)
`type` | string

## Example

```typescript
import type { MRBetaFallbackBlock } from ''

// TODO: Update the object below with actual values
const example = {
  "from": null,
  "to": null,
  "trigger": null,
  "type": null,
} satisfies MRBetaFallbackBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaFallbackBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


