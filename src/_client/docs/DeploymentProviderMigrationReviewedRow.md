
# DeploymentProviderMigrationReviewedRow

One row of the preview the caller reviewed: its instance and the version it was shown at.

## Properties

Name | Type
------------ | -------------
`instance` | string
`updatedAt` | Date

## Example

```typescript
import type { DeploymentProviderMigrationReviewedRow } from ''

// TODO: Update the object below with actual values
const example = {
  "instance": null,
  "updatedAt": null,
} satisfies DeploymentProviderMigrationReviewedRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeploymentProviderMigrationReviewedRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


