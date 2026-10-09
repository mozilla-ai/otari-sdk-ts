
# AgentModelRecommendationRequest

A coding agent about to start a subagent, asking which model it should run on.  Every field but ``user`` is a fact the harness already holds at spawn time. The prompt is the task the subagent is given; it is read for the recommendation and never stored or logged.

## Properties

Name | Type
------------ | -------------
`agentType` | string
`description` | string
`harness` | string
`parentModel` | string
`prompt` | string
`requestedModel` | string
`sessionId` | string
`toolUseId` | string
`user` | string

## Example

```typescript
import type { AgentModelRecommendationRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "agentType": null,
  "description": null,
  "harness": null,
  "parentModel": null,
  "prompt": null,
  "requestedModel": null,
  "sessionId": null,
  "toolUseId": null,
  "user": null,
} satisfies AgentModelRecommendationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentModelRecommendationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


