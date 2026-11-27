
# FederationRulePublic

A federation rule of an API key.

## Properties

Name | Type
------------ | -------------
`apiKeyId` | string
`audience` | string
`createdAt` | Date
`email` | string
`id` | string
`issuer` | string
`memberManaged` | boolean
`subject` | string

## Example

```typescript
import type { FederationRulePublic } from ''

// TODO: Update the object below with actual values
const example = {
  "apiKeyId": null,
  "audience": null,
  "createdAt": null,
  "email": null,
  "id": null,
  "issuer": null,
  "memberManaged": null,
  "subject": null,
} satisfies FederationRulePublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FederationRulePublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


