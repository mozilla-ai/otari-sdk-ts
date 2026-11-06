
# SearchProviderOptionSchema

One native option a provider accepts, under the provider\'s own name.

## Properties

Name | Type
------------ | -------------
`_default` | any
`description` | string
`_enum` | Array&lt;string&gt;
`name` | string
`operatorOnly` | boolean
`type` | string

## Example

```typescript
import type { SearchProviderOptionSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "_default": null,
  "description": null,
  "_enum": null,
  "name": null,
  "operatorOnly": null,
  "type": null,
} satisfies SearchProviderOptionSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchProviderOptionSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


