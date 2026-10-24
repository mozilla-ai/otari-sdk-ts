
# FederationRuleCreate

An OpenID Connect identity that may authenticate as the key, in place of its secret.  A token matches when it is signed by ``issuer``, names ``audience`` among its audiences, and carries each of ``subject`` and ``email`` that the rule sets; an email matches only when the token marks it verified. At least one of the two is required.

## Properties

Name | Type
------------ | -------------
`audience` | string
`email` | string
`issuer` | string
`subject` | string

## Example

```typescript
import type { FederationRuleCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "audience": null,
  "email": null,
  "issuer": null,
  "subject": null,
} satisfies FederationRuleCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FederationRuleCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


