
# TurnPublic

One user prompt and the steps it caused.

## Properties

Name | Type
------------ | -------------
`cacheReadTokens` | number
`continued` | boolean
`cost` | number
`endedAt` | Date
`errors` | number
`index` | number
`inputTokens` | number
`llmCalls` | number
`outputTokens` | number
`startedAt` | Date
`state` | string
`stepIds` | Array&lt;string&gt;
`toolCalls` | number

## Example

```typescript
import type { TurnPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "cacheReadTokens": null,
  "continued": null,
  "cost": null,
  "endedAt": null,
  "errors": null,
  "index": null,
  "inputTokens": null,
  "llmCalls": null,
  "outputTokens": null,
  "startedAt": null,
  "state": null,
  "stepIds": null,
  "toolCalls": null,
} satisfies TurnPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TurnPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


