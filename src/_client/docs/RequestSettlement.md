
# RequestSettlement

What one request settled at, summed over every usage row it wrote.  A routed request writes a row per attempt and a vision-normalized one a row for the describe call, all sharing the ``Otari-Request-ID`` the caller was sent as their ``request_group_id``, so this is the request\'s whole bill rather than one attempt\'s. ``cost_usd`` uses the inline ``usage.cost_usd`` format and is null when no row was priced.

## Properties

Name | Type
------------ | -------------
`completionTokens` | number
`costUsd` | string
`promptTokens` | number
`requestId` | string
`rowCount` | number
`status` | string
`totalTokens` | number

## Example

```typescript
import type { RequestSettlement } from ''

// TODO: Update the object below with actual values
const example = {
  "completionTokens": null,
  "costUsd": null,
  "promptTokens": null,
  "requestId": null,
  "rowCount": null,
  "status": null,
  "totalTokens": null,
} satisfies RequestSettlement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RequestSettlement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


