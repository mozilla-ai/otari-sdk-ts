
# ModelArchitecture

What a model reads and writes, in OpenRouter\'s ``architecture`` shape.

## Properties

Name | Type
------------ | -------------
`inputModalities` | Array&lt;string&gt;
`outputModalities` | Array&lt;string&gt;

## Example

```typescript
import type { ModelArchitecture } from ''

// TODO: Update the object below with actual values
const example = {
  "inputModalities": null,
  "outputModalities": null,
} satisfies ModelArchitecture

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelArchitecture
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


