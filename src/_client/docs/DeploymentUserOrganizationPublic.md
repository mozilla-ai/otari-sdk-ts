
# DeploymentUserOrganizationPublic

One organization an identity belongs to, as the operator surface lists it.

## Properties

Name | Type
------------ | -------------
`name` | string
`organizationId` | string
`role` | string
`slug` | string
`status` | string

## Example

```typescript
import type { DeploymentUserOrganizationPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "organizationId": null,
  "role": null,
  "slug": null,
  "status": null,
} satisfies DeploymentUserOrganizationPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeploymentUserOrganizationPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


