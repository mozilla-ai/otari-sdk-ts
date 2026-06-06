
# Content4


## Properties

Name | Type
------------ | -------------
`errorCode` | string
`type` | string
`content` | [Array&lt;MRCodeExecutionOutputBlock&gt;](MRCodeExecutionOutputBlock.md)
`returnCode` | number
`stderr` | string
`stdout` | string
`encryptedStdout` | string

## Example

```typescript
import type { Content4 } from ''

// TODO: Update the object below with actual values
const example = {
  "errorCode": null,
  "type": null,
  "content": null,
  "returnCode": null,
  "stderr": null,
  "stdout": null,
  "encryptedStdout": null,
} satisfies Content4

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Content4
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


