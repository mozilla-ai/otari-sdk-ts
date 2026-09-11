
# Content17Inner


## Properties

Name | Type
------------ | -------------
`signature` | string
`thinking` | string
`type` | string
`citations` | [Array&lt;MRBetaTextBlockCitationsInner&gt;](MRBetaTextBlockCitationsInner.md)
`text` | string
`data` | string
`id` | string
`caller` | [Caller](Caller.md)
`input` | { [key: string]: any; }
`name` | string
`toolsetName` | string
`content` | string
`toolUseId` | string
`fileId` | string
`serverName` | string
`isError` | boolean
`encryptedContent` | string
`from` | [MRBetaFallbackInfo](MRBetaFallbackInfo.md)
`to` | [MRBetaFallbackInfo](MRBetaFallbackInfo.md)
`trigger` | [MRBetaFallbackRefusalTrigger](MRBetaFallbackRefusalTrigger.md)

## Example

```typescript
import type { Content17Inner } from ''

// TODO: Update the object below with actual values
const example = {
  "signature": null,
  "thinking": null,
  "type": null,
  "citations": null,
  "text": null,
  "data": null,
  "id": null,
  "caller": null,
  "input": null,
  "name": null,
  "toolsetName": null,
  "content": null,
  "toolUseId": null,
  "fileId": null,
  "serverName": null,
  "isError": null,
  "encryptedContent": null,
  "from": null,
  "to": null,
  "trigger": null,
} satisfies Content17Inner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Content17Inner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


