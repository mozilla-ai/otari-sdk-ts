
# SwitchActiveOrganizationRequest

Point the caller\'s identity at one of the organizations they belong to.  The one request in this surface that names an organization by id, and it is not a hole in the tenant boundary: an id the caller holds no active membership in answers 404, so it says nothing about whether the organization exists.

## Properties

Name | Type
------------ | -------------
`organizationId` | string

## Example

```typescript
import type { SwitchActiveOrganizationRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "organizationId": null,
} satisfies SwitchActiveOrganizationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SwitchActiveOrganizationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


