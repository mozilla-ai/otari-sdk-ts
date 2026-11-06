
# WorkspaceHostedProviderPublic

One hosted provider as one workspace sees it.

## Properties

Name | Type
------------ | -------------
`customized` | boolean
`enabled` | boolean
`models` | Array&lt;string&gt;
`provider` | string
`servedByOwnKey` | boolean
`servedModels` | Array&lt;string&gt;
`zeroDataRetention` | boolean

## Example

```typescript
import type { WorkspaceHostedProviderPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "customized": null,
  "enabled": null,
  "models": null,
  "provider": null,
  "servedByOwnKey": null,
  "servedModels": null,
  "zeroDataRetention": null,
} satisfies WorkspaceHostedProviderPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceHostedProviderPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


