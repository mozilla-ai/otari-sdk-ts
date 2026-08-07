
# UpdateToolSettingsRequest

Change one or more tool settings. Omitted fields are left unchanged; an explicit ``null`` clears a field back to the configured env/YAML default.

## Properties

Name | Type
------------ | -------------
`guardrailsUrl` | string
`sandboxPurposeHint` | string
`sandboxUrl` | string
`webSearchEngines` | string
`webSearchExtract` | boolean
`webSearchIntercept` | boolean
`webSearchMaxResults` | number
`webSearchPurposeHint` | string
`webSearchUrl` | string

## Example

```typescript
import type { UpdateToolSettingsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "guardrailsUrl": null,
  "sandboxPurposeHint": null,
  "sandboxUrl": null,
  "webSearchEngines": null,
  "webSearchExtract": null,
  "webSearchIntercept": null,
  "webSearchMaxResults": null,
  "webSearchPurposeHint": null,
  "webSearchUrl": null,
} satisfies UpdateToolSettingsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateToolSettingsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


