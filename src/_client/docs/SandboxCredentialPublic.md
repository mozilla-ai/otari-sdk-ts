
# SandboxCredentialPublic

Where the key a hosted sandbox provider leases with comes from. Never the key itself.

## Properties

Name | Type
------------ | -------------
`envVar` | string
`last4` | string
`source` | string

## Example

```typescript
import type { SandboxCredentialPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "envVar": null,
  "last4": null,
  "source": null,
} satisfies SandboxCredentialPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SandboxCredentialPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


