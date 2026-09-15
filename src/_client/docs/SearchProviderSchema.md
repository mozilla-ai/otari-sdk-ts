
# SearchProviderSchema

One search provider this build can dispatch to, for the add-tool picker.

## Properties

Name | Type
------------ | -------------
`defaultApiBase` | string
`id` | string
`requiresApiBase` | boolean
`requiresApiKey` | boolean

## Example

```typescript
import type { SearchProviderSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "defaultApiBase": null,
  "id": null,
  "requiresApiBase": null,
  "requiresApiKey": null,
} satisfies SearchProviderSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchProviderSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


