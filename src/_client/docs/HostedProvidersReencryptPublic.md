
# HostedProvidersReencryptPublic

What re-encrypting the stored hosted provider credentials did.  ``unreadable`` counts providers no configured key reads, left as they were to be re-entered; ``skipped`` those edited while the rotation ran, already written under the primary key.

## Properties

Name | Type
------------ | -------------
`reencrypted` | number
`skipped` | number
`unreadable` | number

## Example

```typescript
import type { HostedProvidersReencryptPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "reencrypted": null,
  "skipped": null,
  "unreadable": null,
} satisfies HostedProvidersReencryptPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedProvidersReencryptPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


