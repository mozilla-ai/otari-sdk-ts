
# CreateSearchToolRequest

Create a stored search tool. ``api_key`` is write-only and requires OTARI_SECRET_KEY.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`name` | string
`options` | { [key: string]: any; }
`provider` | string
`timeout` | number

## Example

```typescript
import type { CreateSearchToolRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "name": null,
  "options": null,
  "provider": null,
  "timeout": null,
} satisfies CreateSearchToolRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSearchToolRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


