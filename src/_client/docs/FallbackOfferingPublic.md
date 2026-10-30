
# FallbackOfferingPublic

One offering a catalog ID tries, and who runs the built-in tools on it.

## Properties

Name | Type
------------ | -------------
`otariTools` | Array&lt;string&gt;
`ownTools` | Array&lt;string&gt;
`provider` | string
`providerType` | string
`selector` | string

## Example

```typescript
import type { FallbackOfferingPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "otariTools": null,
  "ownTools": null,
  "provider": null,
  "providerType": null,
  "selector": null,
} satisfies FallbackOfferingPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FallbackOfferingPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


