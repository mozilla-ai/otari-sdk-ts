
# ModelObject

OpenAI-compatible model object.

## Properties

Name | Type
------------ | -------------
`architecture` | [ModelArchitecture](ModelArchitecture.md)
`contextWindow` | number
`created` | number
`deploymentManaged` | boolean
`id` | string
`maxOutputTokens` | number
`name` | string
`object` | string
`ownedBy` | string
`pricing` | [ModelPricingInfo](ModelPricingInfo.md)
`pricingSource` | string
`supportedParameters` | Array&lt;string&gt;

## Example

```typescript
import type { ModelObject } from ''

// TODO: Update the object below with actual values
const example = {
  "architecture": null,
  "contextWindow": null,
  "created": null,
  "deploymentManaged": null,
  "id": null,
  "maxOutputTokens": null,
  "name": null,
  "object": null,
  "ownedBy": null,
  "pricing": null,
  "pricingSource": null,
  "supportedParameters": null,
} satisfies ModelObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


