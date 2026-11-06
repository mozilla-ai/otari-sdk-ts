
# CodeExecuteResponse

A completed code execution. Code that failed is a completed execution with a nonzero ``return_code``.

## Properties

Name | Type
------------ | -------------
`files` | [Array&lt;CodeExecutionOutputFile&gt;](CodeExecutionOutputFile.md)
`object` | string
`returnCode` | number
`stderr` | string
`stdout` | string

## Example

```typescript
import type { CodeExecuteResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "files": null,
  "object": null,
  "returnCode": null,
  "stderr": null,
  "stdout": null,
} satisfies CodeExecuteResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CodeExecuteResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


