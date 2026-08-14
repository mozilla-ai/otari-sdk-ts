
# RankRequest

Record how well each candidate did, for one or many prompts.  A batch because of the arithmetic: a pool routes nothing until it holds ``router_seed_count`` examples (20 by default) and the vote reads the ``k`` nearest (5 by default), so a useful first teaching pass is dozens of examples across the kinds of prompt you care about.

## Properties

Name | Type
------------ | -------------
`examples` | [Array&lt;ScoredExample&gt;](ScoredExample.md)
`userId` | string

## Example

```typescript
import type { RankRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "examples": null,
  "userId": null,
} satisfies RankRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RankRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


