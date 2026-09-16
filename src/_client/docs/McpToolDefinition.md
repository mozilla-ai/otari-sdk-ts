
# McpToolDefinition

One live tool a caller-orchestrated application may expose to its model.  ``annotations`` is the remote server\'s own metadata, passed through as untrusted data. Otari never turns ``readOnlyHint`` into an authorization decision (R-RISK-1); each application owns its risk policy, and a server cannot waive an application\'s approval gate by labeling itself read-only.

## Properties

Name | Type
------------ | -------------
`annotations` | { [key: string]: any; }
`description` | string
`inputSchema` | { [key: string]: any; }
`name` | string

## Example

```typescript
import type { McpToolDefinition } from ''

// TODO: Update the object below with actual values
const example = {
  "annotations": null,
  "description": null,
  "inputSchema": null,
  "name": null,
} satisfies McpToolDefinition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpToolDefinition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


