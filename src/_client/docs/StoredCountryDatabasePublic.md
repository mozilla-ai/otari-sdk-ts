
# StoredCountryDatabasePublic

The country file stored in the database, which every replica reads.

## Properties

Name | Type
------------ | -------------
`builtAt` | Date
`databaseType` | string
`sha256` | string
`sizeBytes` | number
`uploadedAt` | Date

## Example

```typescript
import type { StoredCountryDatabasePublic } from ''

// TODO: Update the object below with actual values
const example = {
  "builtAt": null,
  "databaseType": null,
  "sha256": null,
  "sizeBytes": null,
  "uploadedAt": null,
} satisfies StoredCountryDatabasePublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StoredCountryDatabasePublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


