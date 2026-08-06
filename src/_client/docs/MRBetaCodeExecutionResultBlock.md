
# MRBetaCodeExecutionResultBlock


## Properties

Name | Type
------------ | -------------
`content` | [Array&lt;MRBetaCodeExecutionOutputBlock&gt;](MRBetaCodeExecutionOutputBlock.md)
`returnCode` | number
`stderr` | string
`stdout` | string
`type` | string

## Example

```typescript
import type { MRBetaCodeExecutionResultBlock } from ''

// TODO: Update the object below with actual values
const example = {
  "content": null,
  "returnCode": null,
  "stderr": null,
  "stdout": null,
  "type": null,
} satisfies MRBetaCodeExecutionResultBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaCodeExecutionResultBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


