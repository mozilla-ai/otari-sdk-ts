
# MRBetaResponseToolInputSchema

[JSON schema](https://json-schema.org/draft/2020-12) for this tool\'s input.  This defines the shape of the `input` that your tool accepts and that the model will produce.

## Properties

Name | Type
------------ | -------------
`type` | string
`properties` | { [key: string]: any; }
`required` | Array&lt;string&gt;

## Example

```typescript
import type { MRBetaResponseToolInputSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "properties": null,
  "required": null,
} satisfies MRBetaResponseToolInputSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaResponseToolInputSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


