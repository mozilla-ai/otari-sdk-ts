
# DeploymentAdminAccessPublic

Whether the caller may reach the deployment administration surface.  The one endpoint in that surface that answers 200 for everybody, and deliberately: the rest refuse with 404 so they do not confirm they exist, which leaves the dashboard nothing to gate its navigation on but a failed request. This says the same thing a caller could learn by trying, without the try.

## Properties

Name | Type
------------ | -------------
`granted` | boolean

## Example

```typescript
import type { DeploymentAdminAccessPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "granted": null,
} satisfies DeploymentAdminAccessPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeploymentAdminAccessPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


