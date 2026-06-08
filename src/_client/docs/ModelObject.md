
# ModelObject

OpenAI-compatible model object.

## Properties

Name | Type
------------ | -------------
`created` | number
`id` | string
`object` | string
`ownedBy` | string
`pricing` | [ModelPricingInfo](ModelPricingInfo.md)

## Example

```typescript
import type { ModelObject } from ''

// TODO: Update the object below with actual values
const example = {
  "created": null,
  "id": null,
  "object": null,
  "ownedBy": null,
  "pricing": null,
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


