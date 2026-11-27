
# ActivationIssuedKeyPublic

The setup key the guide already issued, identified as the Keys page lists it. Never its plaintext.

## Properties

Name | Type
------------ | -------------
`keyId` | string
`keyPrefix` | string
`keySuffix` | string

## Example

```typescript
import type { ActivationIssuedKeyPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "keyId": null,
  "keyPrefix": null,
  "keySuffix": null,
} satisfies ActivationIssuedKeyPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActivationIssuedKeyPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


