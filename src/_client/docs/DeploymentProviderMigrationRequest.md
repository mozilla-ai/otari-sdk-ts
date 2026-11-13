
# DeploymentProviderMigrationRequest

Which deployment providers to move: the ones the caller reviewed, as reviewed.  ``rows`` names the rows of the preview the caller saw, each with the ``updated_at`` it was shown at. A row the preview did not show, or one changed since, is left where it is, so nothing moves that nobody reviewed. Omitted, every row that can move does.

## Properties

Name | Type
------------ | -------------
`rows` | [Array&lt;DeploymentProviderMigrationReviewedRow&gt;](DeploymentProviderMigrationReviewedRow.md)

## Example

```typescript
import type { DeploymentProviderMigrationRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "rows": null,
} satisfies DeploymentProviderMigrationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeploymentProviderMigrationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


