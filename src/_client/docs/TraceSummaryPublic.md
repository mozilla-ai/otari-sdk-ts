
# TraceSummaryPublic

One agent session as the session list shows it.

## Properties

Name | Type
------------ | -------------
`apiKeyId` | string
`cost` | number
`errorCount` | number
`harness` | string
`inputTokens` | number
`lastActivityAt` | Date
`name` | string
`outputTokens` | number
`sessionSource` | string
`spanCount` | number
`startedAt` | Date
`stepCount` | number
`traceId` | string
`userId` | string
`workspaceId` | string

## Example

```typescript
import type { TraceSummaryPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "apiKeyId": null,
  "cost": null,
  "errorCount": null,
  "harness": null,
  "inputTokens": null,
  "lastActivityAt": null,
  "name": null,
  "outputTokens": null,
  "sessionSource": null,
  "spanCount": null,
  "startedAt": null,
  "stepCount": null,
  "traceId": null,
  "userId": null,
  "workspaceId": null,
} satisfies TraceSummaryPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TraceSummaryPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


