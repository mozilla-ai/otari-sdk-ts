
# ActivationApiKeyPublic

The API key the guide hands out, with its plaintext.  Returned once, on the press that asked for it, and never stored in plaintext, like every other key this gateway mints.

## Properties

Name | Type
------------ | -------------
`key` | string
`keyId` | string
`keyName` | string
`keyPrefix` | string
`keySuffix` | string

## Example

```typescript
import type { ActivationApiKeyPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "keyId": null,
  "keyName": null,
  "keyPrefix": null,
  "keySuffix": null,
} satisfies ActivationApiKeyPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActivationApiKeyPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


