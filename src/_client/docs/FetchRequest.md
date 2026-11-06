
# FetchRequest

A direct fetch request: one page, read through the deployment\'s fetch tool or the one named.

## Properties

Name | Type
------------ | -------------
`fetchToolName` | string
`includeRaw` | boolean
`maxChars` | number
`providerOptions` | { [key: string]: any; }
`url` | string
`user` | string

## Example

```typescript
import type { FetchRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "fetchToolName": null,
  "includeRaw": null,
  "maxChars": null,
  "providerOptions": null,
  "url": null,
  "user": null,
} satisfies FetchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FetchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


