
# McpConnectionComplete

What the authorization server sent back, as the dashboard received it.

## Properties

Name | Type
------------ | -------------
`code` | string
`iss` | string
`state` | string

## Example

```typescript
import type { McpConnectionComplete } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "iss": null,
  "state": null,
} satisfies McpConnectionComplete

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpConnectionComplete
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


