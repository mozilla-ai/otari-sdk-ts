
# MRBetaResponseTool

A custom tool definition, as sent.

## Properties

Name | Type
------------ | -------------
`inputSchema` | [MRBetaResponseToolInputSchema](MRBetaResponseToolInputSchema.md)
`name` | string
`allowedCallers` | Array&lt;string&gt;
`deferLoading` | boolean
`description` | string
`eagerInputStreaming` | boolean
`inputExamples` | Array&lt;{ [key: string]: any; }&gt;
`strict` | boolean
`type` | string

## Example

```typescript
import type { MRBetaResponseTool } from ''

// TODO: Update the object below with actual values
const example = {
  "inputSchema": null,
  "name": null,
  "allowedCallers": null,
  "deferLoading": null,
  "description": null,
  "eagerInputStreaming": null,
  "inputExamples": null,
  "strict": null,
  "type": null,
} satisfies MRBetaResponseTool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaResponseTool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


