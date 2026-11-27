
# OrgProviderKeysReencryptPublic

What re-encrypting the stored organization provider credentials did.  Each count is keys, not values, because a key holding one value no configured secret reads has to be re-entered whole: it serves nothing until it is. ``unreadable`` counts those, left exactly as they were; ``skipped`` those edited while the rotation ran, already written under the primary secret.

## Properties

Name | Type
------------ | -------------
`reencrypted` | number
`skipped` | number
`unreadable` | number

## Example

```typescript
import type { OrgProviderKeysReencryptPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "reencrypted": null,
  "skipped": null,
  "unreadable": null,
} satisfies OrgProviderKeysReencryptPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrgProviderKeysReencryptPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


