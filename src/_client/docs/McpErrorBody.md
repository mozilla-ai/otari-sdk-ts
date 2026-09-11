
# McpErrorBody

The one error shape both stored-server endpoints return (R-ERR-1).

## Properties

Name | Type
------------ | -------------
`code` | string
`detail` | string
`executionState` | [ExecutionState](ExecutionState.md)
`requestId` | string

## Example

```typescript
import type { McpErrorBody } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "detail": null,
  "executionState": null,
  "requestId": null,
} satisfies McpErrorBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpErrorBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


