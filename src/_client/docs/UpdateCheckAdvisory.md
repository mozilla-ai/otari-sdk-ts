
# UpdateCheckAdvisory

A published security advisory for otari that covers the version this deployment ran when it checked.

## Properties

Name | Type
------------ | -------------
`fixedIn` | string
`id` | string
`severity` | string
`summary` | string
`url` | string

## Example

```typescript
import type { UpdateCheckAdvisory } from ''

// TODO: Update the object below with actual values
const example = {
  "fixedIn": null,
  "id": null,
  "severity": null,
  "summary": null,
  "url": null,
} satisfies UpdateCheckAdvisory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCheckAdvisory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


