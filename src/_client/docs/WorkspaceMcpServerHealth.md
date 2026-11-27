
# WorkspaceMcpServerHealth

The last time the gateway talked to the server: whether it answered, and what it found.  Written by a manager\'s check and by real requests that reach the server. Describes the server as the gateway saw it at ``checked_at``, not now: a server that answered then can be down since, and the request path checks nothing in advance on the strength of this.

## Properties

Name | Type
------------ | -------------
`checkedAt` | string
`error` | [CheckFailure](CheckFailure.md)
`httpStatus` | number
`lastFailure` | [WorkspaceMcpServerLastFailure](WorkspaceMcpServerLastFailure.md)
`missingAllowedTools` | Array&lt;string&gt;
`readOnlyHintedTools` | Array&lt;string&gt;
`status` | string
`toolCount` | number
`toolDescriptions` | { [key: string]: string; }
`tools` | Array&lt;string&gt;

## Example

```typescript
import type { WorkspaceMcpServerHealth } from ''

// TODO: Update the object below with actual values
const example = {
  "checkedAt": null,
  "error": null,
  "httpStatus": null,
  "lastFailure": null,
  "missingAllowedTools": null,
  "readOnlyHintedTools": null,
  "status": null,
  "toolCount": null,
  "toolDescriptions": null,
  "tools": null,
} satisfies WorkspaceMcpServerHealth

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerHealth
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


