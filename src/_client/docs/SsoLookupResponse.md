
# SsoLookupResponse

Whether an organization\'s own connection admits a sign-in at this address.  An unknown domain, one no organization has proven, and a proven one whose organization holds no enabled connection all answer alike: ``found`` is false and the other two fields are null, so the response cannot be read as a directory of which organizations use Otari.

## Properties

Name | Type
------------ | -------------
`found` | boolean
`organizationName` | string
`slug` | string

## Example

```typescript
import type { SsoLookupResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "found": null,
  "organizationName": null,
  "slug": null,
} satisfies SsoLookupResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SsoLookupResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


