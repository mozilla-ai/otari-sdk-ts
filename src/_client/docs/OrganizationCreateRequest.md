
# OrganizationCreateRequest

Create an organization, with the caller as its owner.  Name only. The slug is derived server-side and never sent, because it is unique where the name is not: two organizations may share a name, and a rename deliberately does not move the slug.

## Properties

Name | Type
------------ | -------------
`name` | string

## Example

```typescript
import type { OrganizationCreateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
} satisfies OrganizationCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


