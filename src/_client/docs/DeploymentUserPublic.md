
# DeploymentUserPublic

An identity on this deployment, whatever organization it belongs to.  Not ``ActiveOrganizationMemberPublic``: that shape is a *membership* joined to an identity, scoped to one organization and hiding the suspended rows. This one is the identity itself, and its ``organizations`` list carries every membership at whatever status, because an account whose only membership is suspended is precisely what an operator comes here to find.  ``is_bootstrap_operator`` and ``is_self`` are the two rows an operator may not deactivate or demote, and they travel on the row so the page can disable those controls rather than offering ones the server refuses. Neither is an authorization: the server refuses either way. ``is_self`` is answered here because nothing else the dashboard fetches names the caller\'s identity, so without it the page could not tell which row is the reader\'s own.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`email` | string
`fullName` | string
`id` | string
`isActive` | boolean
`isBootstrapOperator` | boolean
`isSelf` | boolean
`isSuperuser` | boolean
`lastSignInAt` | Date
`organizations` | [Array&lt;DeploymentUserOrganizationPublic&gt;](DeploymentUserOrganizationPublic.md)

## Example

```typescript
import type { DeploymentUserPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "email": null,
  "fullName": null,
  "id": null,
  "isActive": null,
  "isBootstrapOperator": null,
  "isSelf": null,
  "isSuperuser": null,
  "lastSignInAt": null,
  "organizations": null,
} satisfies DeploymentUserPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeploymentUserPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


