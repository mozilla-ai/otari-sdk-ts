
# SearchProviderSchema

One provider a search or fetch instance may name, for the add-tool form.  One schema for both capabilities: the fields they share, then each one\'s own, which are null on the other\'s entries.

## Properties

Name | Type
------------ | -------------
`defaultApiBase` | string
`docUrl` | string
`formats` | Array&lt;string&gt;
`id` | string
`instances` | Array&lt;string&gt;
`keyInUrl` | boolean
`kind` | string
`maxResults` | number
`maxUrlsPerCall` | number
`options` | [Array&lt;SearchProviderOptionSchema&gt;](SearchProviderOptionSchema.md)
`queryInUrl` | boolean
`rendersJavascript` | boolean
`requiresApiBase` | boolean
`requiresApiKey` | boolean
`tier` | string

## Example

```typescript
import type { SearchProviderSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "defaultApiBase": null,
  "docUrl": null,
  "formats": null,
  "id": null,
  "instances": null,
  "keyInUrl": null,
  "kind": null,
  "maxResults": null,
  "maxUrlsPerCall": null,
  "options": null,
  "queryInUrl": null,
  "rendersJavascript": null,
  "requiresApiBase": null,
  "requiresApiKey": null,
  "tier": null,
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


