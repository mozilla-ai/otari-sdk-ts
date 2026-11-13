
# OrganizationSsoPreflightMemberPublic

One active member who holds no sign-in link to the caller\'s organization\'s own connection.

## Properties

Name | Type
------------ | -------------
`email` | string
`fullName` | string
`userId` | string

## Example

```typescript
import type { OrganizationSsoPreflightMemberPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "fullName": null,
  "userId": null,
} satisfies OrganizationSsoPreflightMemberPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationSsoPreflightMemberPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


