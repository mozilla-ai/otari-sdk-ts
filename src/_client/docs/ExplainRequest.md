
# ExplainRequest

Ask what a policy would do, without dispatching anything.  Either name a stored/configured policy (``name``) or pass a draft ``spec`` that has not been saved. The draft form is what makes authoring-time validation possible: the compiler filters candidates, so a chain can compile down to one attempt, and an author needs to see that before saving rather than during an outage.

## Properties

Name | Type
------------ | -------------
`allowedModels` | Array&lt;string&gt;
`budgetRemainingUsd` | number
`budgetUsedPct` | number
`keyId` | string
`name` | string
`spec` | { [key: string]: any; }
`userId` | string
`workspaceId` | string

## Example

```typescript
import type { ExplainRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedModels": null,
  "budgetRemainingUsd": null,
  "budgetUsedPct": null,
  "keyId": null,
  "name": null,
  "spec": null,
  "userId": null,
  "workspaceId": null,
} satisfies ExplainRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExplainRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


