
# LearnedPolicy

A policy whose selection depends on routing memory, for the status overview.  Only a *learned* policy belongs here. A weighted policy names a router too, but its split is written in the policy document, so listing it under a warmth report would tie it to a pool it never reads.

## Properties

Name | Type
------------ | -------------
`backend` | string
`candidates` | Array&lt;string&gt;
`defaultTarget` | string
`name` | string

## Example

```typescript
import type { LearnedPolicy } from ''

// TODO: Update the object below with actual values
const example = {
  "backend": null,
  "candidates": null,
  "defaultTarget": null,
  "name": null,
} satisfies LearnedPolicy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LearnedPolicy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


