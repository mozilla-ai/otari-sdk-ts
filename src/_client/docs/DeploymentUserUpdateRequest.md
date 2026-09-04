
# DeploymentUserUpdateRequest

The two flags the operator surface may flip, each optional.  Omitting a field leaves it alone, so deactivating an account and changing what it may administer stay separate decisions even though one endpoint carries both. A body that sets neither is refused rather than treated as a no-op: it is a request that meant something and lost it.

## Properties

Name | Type
------------ | -------------
`isActive` | boolean
`isSuperuser` | boolean

## Example

```typescript
import type { DeploymentUserUpdateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "isActive": null,
  "isSuperuser": null,
} satisfies DeploymentUserUpdateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeploymentUserUpdateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


