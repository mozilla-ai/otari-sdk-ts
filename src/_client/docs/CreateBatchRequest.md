
# CreateBatchRequest


## Properties

Name | Type
------------ | -------------
`completionWindow` | string
`metadata` | { [key: string]: string; }
`model` | string
`requests` | [Array&lt;BatchRequestItem&gt;](BatchRequestItem.md)

## Example

```typescript
import type { CreateBatchRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "completionWindow": null,
  "metadata": null,
  "model": null,
  "requests": null,
} satisfies CreateBatchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateBatchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


