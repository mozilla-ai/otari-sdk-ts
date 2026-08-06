
# KnownProviderSchema

A selected provider\'s autofill hints for the add-provider form.

## Properties

Name | Type
------------ | -------------
`defaultApiBase` | string
`envKey` | string
`envKeyPresent` | boolean
`id` | string
`name` | string
`requiresApiKey` | boolean

## Example

```typescript
import type { KnownProviderSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "defaultApiBase": null,
  "envKey": null,
  "envKeyPresent": null,
  "id": null,
  "name": null,
  "requiresApiKey": null,
} satisfies KnownProviderSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KnownProviderSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


