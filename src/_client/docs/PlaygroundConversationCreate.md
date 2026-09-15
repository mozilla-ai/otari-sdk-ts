
# PlaygroundConversationCreate

A transcript to save, whole: there is no append-a-turn endpoint.  The page saves on an explicit click, with the conversation it currently shows, so the write is one row plus its turns and a resave is a new conversation rather than a mutation of the old one. That is also what keeps the ordering column honest: ``position`` is assigned here, from the list\'s own order, and never negotiated with a client over several requests.

## Properties

Name | Type
------------ | -------------
`messages` | [Array&lt;PlaygroundMessageCreate&gt;](PlaygroundMessageCreate.md)
`model` | string
`title` | string
`workspaceId` | string

## Example

```typescript
import type { PlaygroundConversationCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "messages": null,
  "model": null,
  "title": null,
  "workspaceId": null,
} satisfies PlaygroundConversationCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundConversationCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


