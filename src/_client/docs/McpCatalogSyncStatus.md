
# McpCatalogSyncStatus

Whether the catalog syncs, what the sync in progress or the last one did, and how many servers it holds.

## Properties

Name | Type
------------ | -------------
`error` | string
`fetched` | number
`finishedAt` | Date
`isStale` | boolean
`kept` | number
`lastCompletedAt` | Date
`mode` | string
`nextRequestAt` | Date
`nextSyncAt` | Date
`outcome` | string
`pages` | number
`removed` | number
`requested` | boolean
`running` | boolean
`serverCount` | number
`startedAt` | Date

## Example

```typescript
import type { McpCatalogSyncStatus } from ''

// TODO: Update the object below with actual values
const example = {
  "error": null,
  "fetched": null,
  "finishedAt": null,
  "isStale": null,
  "kept": null,
  "lastCompletedAt": null,
  "mode": null,
  "nextRequestAt": null,
  "nextSyncAt": null,
  "outcome": null,
  "pages": null,
  "removed": null,
  "requested": null,
  "running": null,
  "serverCount": null,
  "startedAt": null,
} satisfies McpCatalogSyncStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as McpCatalogSyncStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


