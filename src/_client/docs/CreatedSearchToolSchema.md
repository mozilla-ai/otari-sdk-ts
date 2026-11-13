
# CreatedSearchToolSchema

A stored instance as created, with the default setting the create also stored, if any.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`createdAt` | string
`decryptable` | boolean
`fetchTool` | string
`kind` | string
`last4` | string
`name` | string
`notice` | string
`options` | { [key: string]: any; }
`pinnedWebSearchDefaultTool` | string
`provider` | string
`shadowsConfig` | boolean
`timeout` | number
`updatedAt` | string

## Example

```typescript
import type { CreatedSearchToolSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "createdAt": null,
  "decryptable": null,
  "fetchTool": null,
  "kind": null,
  "last4": null,
  "name": null,
  "notice": null,
  "options": null,
  "pinnedWebSearchDefaultTool": null,
  "provider": null,
  "shadowsConfig": null,
  "timeout": null,
  "updatedAt": null,
} satisfies CreatedSearchToolSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatedSearchToolSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


