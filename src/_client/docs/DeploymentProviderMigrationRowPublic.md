
# DeploymentProviderMigrationRowPublic

What moving one deployment provider onto a hosted provider does, or did.  ``instance`` is the deployment provider\'s name, which the hosted provider keeps, so ``instance:model`` selectors keep working. ``outcome`` is ``migrate`` in a preview and ``migrated`` once applied; ``conflict``, ``unreadable``, ``invalid`` and ``failed`` leave the row where it is, with ``detail`` saying why. ``source_removed`` says whether the deployment provider was removed: it is kept while the hosted provider offers no model, and when it changed while the move ran. ``notes`` are what an operator should check afterwards.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`detail` | string
`instance` | string
`models` | number
`notes` | Array&lt;string&gt;
`outcome` | string
`provider` | string
`sourceRemoved` | boolean
`updatedAt` | Date

## Example

```typescript
import type { DeploymentProviderMigrationRowPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "detail": null,
  "instance": null,
  "models": null,
  "notes": null,
  "outcome": null,
  "provider": null,
  "sourceRemoved": null,
  "updatedAt": null,
} satisfies DeploymentProviderMigrationRowPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeploymentProviderMigrationRowPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


