
# VideoJobSummary

One job the gateway started, from its own records: what it knows without asking the provider.

## Properties

Name | Type
------------ | -------------
`billed` | boolean
`createdAt` | Date
`id` | string
`model` | string
`object` | string
`provider` | string
`seconds` | number

## Example

```typescript
import type { VideoJobSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "billed": null,
  "createdAt": null,
  "id": null,
  "model": null,
  "object": null,
  "provider": null,
  "seconds": null,
} satisfies VideoJobSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VideoJobSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


