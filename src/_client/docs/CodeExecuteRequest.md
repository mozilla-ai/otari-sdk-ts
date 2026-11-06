
# CodeExecuteRequest

A direct code execution request: the code to run, and the sandbox to run it in.

## Properties

Name | Type
------------ | -------------
`code` | string
`container` | string
`fileIds` | Array&lt;string&gt;
`timeoutSeconds` | number
`user` | string

## Example

```typescript
import type { CodeExecuteRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "container": null,
  "fileIds": null,
  "timeoutSeconds": null,
  "user": null,
} satisfies CodeExecuteRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CodeExecuteRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


