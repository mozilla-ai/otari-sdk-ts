
# ActivationApiKeyPublic

The API key the guide hands out, with its plaintext.  Returned once per call and never stored in plaintext, like every other key this gateway mints: a page reload issues a new one and rotates the same row, which is what makes the guide able to show a working key without keeping a readable secret anywhere.

## Properties

Name | Type
------------ | -------------
`key` | string
`keyId` | string
`keyName` | string
`keyPrefix` | string

## Example

```typescript
import type { ActivationApiKeyPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "keyId": null,
  "keyName": null,
  "keyPrefix": null,
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


