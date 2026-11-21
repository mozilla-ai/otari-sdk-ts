
# OrgWebSearchKeyUpdateRequest

A partial update: only what is set is applied, and ``null`` clears ``api_base`` or ``options``.  ``kind`` is fixed once a key is created, so sending it is refused.

## Properties

Name | Type
------------ | -------------
`apiBase` | string
`apiKey` | string
`name` | string
`options` | { [key: string]: any; }

## Example

```typescript
import type { OrgWebSearchKeyUpdateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "apiBase": null,
  "apiKey": null,
  "name": null,
  "options": null,
} satisfies OrgWebSearchKeyUpdateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrgWebSearchKeyUpdateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


