
# VideoJobList

The caller\'s video jobs, newest first.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;VideoJobSummary&gt;](VideoJobSummary.md)
`object` | string

## Example

```typescript
import type { VideoJobList } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "object": null,
} satisfies VideoJobList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VideoJobList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


