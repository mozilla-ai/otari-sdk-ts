
# BlockedEmailCreateRequest

An address or a domain to block.

## Properties

Name | Type
------------ | -------------
`reason` | string
`value` | string

## Example

```typescript
import type { BlockedEmailCreateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "reason": null,
  "value": null,
} satisfies BlockedEmailCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BlockedEmailCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


