
# OrganizationModelPricingsPublic

One page of the organization\'s overrides, and how many there are in total.  The envelope shape the platform\'s equivalent endpoint returns, kept so the generated dashboard client stays recognizable across both trees. ``count`` is the total rather than the length of ``data``, which is what lets a client tell whether another page is owed.

## Properties

Name | Type
------------ | -------------
`count` | number
`data` | [Array&lt;OrganizationModelPricingPublic&gt;](OrganizationModelPricingPublic.md)

## Example

```typescript
import type { OrganizationModelPricingsPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "data": null,
} satisfies OrganizationModelPricingsPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationModelPricingsPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


