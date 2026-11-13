
# ListedSearchToolSchema

A stored instance as the listing shows it: with what one of its calls costs.

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
`options` | { [key: string]: any; }
`pricePerCall` | number
`priceSource` | string
`provider` | string
`shadowsConfig` | boolean
`timeout` | number
`updatedAt` | string

## Example

```typescript
import type { ListedSearchToolSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "createdAt": null,
  "decryptable": null,
  "fetchTool": null,
  "kind": null,
  "last4": null,
  "name": null,
  "options": null,
  "pricePerCall": null,
  "priceSource": null,
  "provider": null,
  "shadowsConfig": null,
  "timeout": null,
  "updatedAt": null,
} satisfies ListedSearchToolSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListedSearchToolSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


