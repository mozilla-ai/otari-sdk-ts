
# TraceDetailPublic


## Properties

Name | Type
------------ | -------------
`contentAccess` | string
`contentShare` | [ContentSharePublic](ContentSharePublic.md)
`gates` | [Array&lt;GateSummaryPublic&gt;](GateSummaryPublic.md)
`spans` | [Array&lt;SpanPublic&gt;](SpanPublic.md)
`state` | string
`summary` | [TraceSummaryPublic](TraceSummaryPublic.md)
`toolCosts` | [Array&lt;ToolCostPublic&gt;](ToolCostPublic.md)
`truncated` | boolean
`turns` | [Array&lt;TurnPublic&gt;](TurnPublic.md)

## Example

```typescript
import type { TraceDetailPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "contentAccess": null,
  "contentShare": null,
  "gates": null,
  "spans": null,
  "state": null,
  "summary": null,
  "toolCosts": null,
  "truncated": null,
  "turns": null,
} satisfies TraceDetailPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TraceDetailPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


