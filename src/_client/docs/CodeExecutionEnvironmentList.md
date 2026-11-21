
# CodeExecutionEnvironmentList

The sandbox environments the caller\'s workspace may run code in.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;CodeExecutionEnvironment&gt;](CodeExecutionEnvironment.md)
`object` | string

## Example

```typescript
import type { CodeExecutionEnvironmentList } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "object": null,
} satisfies CodeExecutionEnvironmentList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CodeExecutionEnvironmentList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


