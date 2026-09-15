
# PlaygroundConversationSummary

A row in the history list: enough to recognize, not the transcript.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`id` | string
`messageCount` | number
`model` | string
`title` | string
`workspaceId` | string

## Example

```typescript
import type { PlaygroundConversationSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "id": null,
  "messageCount": null,
  "model": null,
  "title": null,
  "workspaceId": null,
} satisfies PlaygroundConversationSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundConversationSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


