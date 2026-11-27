
# CCServerToolUsage

Calls to tools the provider ran itself during the request, named as in Anthropic\'s usage.

## Properties

Name | Type
------------ | -------------
`webSearchRequests` | number

## Example

```typescript
import type { CCServerToolUsage } from ''

// TODO: Update the object below with actual values
const example = {
  "webSearchRequests": null,
} satisfies CCServerToolUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CCServerToolUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


