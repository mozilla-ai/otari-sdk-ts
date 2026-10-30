
# GateSummaryPublic

How often one agent guardrail gate ran in a session, by what it decided.

## Properties

Name | Type
------------ | -------------
`blocked` | number
`enforcement` | string
`flagged` | number
`gateId` | string
`gateType` | string
`message` | string
`origin` | string
`passed` | number
`refused` | number
`runs` | Array&lt;string&gt;
`spanId` | string
`undecided` | number

## Example

```typescript
import type { GateSummaryPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "blocked": null,
  "enforcement": null,
  "flagged": null,
  "gateId": null,
  "gateType": null,
  "message": null,
  "origin": null,
  "passed": null,
  "refused": null,
  "runs": null,
  "spanId": null,
  "undecided": null,
} satisfies GateSummaryPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GateSummaryPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


