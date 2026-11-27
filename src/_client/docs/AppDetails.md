
# AppDetails

What the consent screen shows about an app before a person approves it.

## Properties

Name | Type
------------ | -------------
`credential` | string
`issuer` | string
`name` | string
`redirectUri` | string
`scopes` | [Array&lt;KeyScope&gt;](KeyScope.md)
`spendLimits` | boolean
`verified` | boolean

## Example

```typescript
import type { AppDetails } from ''

// TODO: Update the object below with actual values
const example = {
  "credential": null,
  "issuer": null,
  "name": null,
  "redirectUri": null,
  "scopes": null,
  "spendLimits": null,
  "verified": null,
} satisfies AppDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AppDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


