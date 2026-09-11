
# StoredSearchToolSchema

A runtime-stored search tool. The API key is never returned, only ``last4``.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`createdAt` | string
`decryptable` | boolean
`last4` | string
`name` | string
`options` | { [key: string]: any; }
`provider` | string
`shadowsConfig` | boolean
`timeout` | number
`updatedAt` | string

## Example

```typescript
import type { StoredSearchToolSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "createdAt": null,
  "decryptable": null,
  "last4": null,
  "name": null,
  "options": null,
  "provider": null,
  "shadowsConfig": null,
  "timeout": null,
  "updatedAt": null,
} satisfies StoredSearchToolSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StoredSearchToolSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


