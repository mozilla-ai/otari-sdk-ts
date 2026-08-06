
# MRBetaEncryptedCodeExecutionResultBlock

Code execution result with encrypted stdout for PFC + web_search results.

## Properties

Name | Type
------------ | -------------
`content` | [Array&lt;MRBetaCodeExecutionOutputBlock&gt;](MRBetaCodeExecutionOutputBlock.md)
`encryptedStdout` | string
`returnCode` | number
`stderr` | string
`type` | string

## Example

```typescript
import type { MRBetaEncryptedCodeExecutionResultBlock } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "encryptedStdout": null,
  "returnCode": null,
  "stderr": null,
  "type": null,
} satisfies MRBetaEncryptedCodeExecutionResultBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaEncryptedCodeExecutionResultBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


