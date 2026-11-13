
# OrganizationSsoEnforcementRequest

What an organization administrator submits to require, or stop requiring, sign-in through its own connection.

## Properties

Name | Type
------------ | -------------
`breakGlassUserId` | string
`breakGlassWaived` | boolean
`required` | boolean

## Example

```typescript
import type { OrganizationSsoEnforcementRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "breakGlassUserId": null,
  "breakGlassWaived": null,
  "required": null,
} satisfies OrganizationSsoEnforcementRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationSsoEnforcementRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


