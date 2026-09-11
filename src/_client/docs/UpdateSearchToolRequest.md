
# UpdateSearchToolRequest

Update a stored search tool. Omitted fields are unchanged; ``api_key`` rotates in place.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`expectedUpdatedAt` | string
`options` | { [key: string]: any; }
`provider` | string
`timeout` | number

## Example

```typescript
import type { UpdateSearchToolRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "expectedUpdatedAt": null,
  "options": null,
  "provider": null,
  "timeout": null,
} satisfies UpdateSearchToolRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateSearchToolRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


