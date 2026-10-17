
# SpanPublic

One span of a session. Content is never part of a span.

## Properties

Name | Type
------------ | -------------
`approximate` | boolean
`attributes` | [{ [key: string]: AttributesValue; }](AttributesValue.md)
`cost` | number
`durationMs` | number
`endTime` | Date
`errorClass` | string
`inputTokens` | number
`kind` | string
`model` | string
`name` | string
`opensTurn` | boolean
`operation` | string
`origin` | string
`outcome` | string
`outputTokens` | number
`parentSpanId` | string
`provider` | string
`recovered` | boolean
`requestId` | string
`spanId` | string
`startTime` | Date
`toolCallId` | string
`toolName` | string
`toolType` | string

## Example

```typescript
import type { SpanPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "approximate": null,
  "attributes": null,
  "cost": null,
  "durationMs": null,
  "endTime": null,
  "errorClass": null,
  "inputTokens": null,
  "kind": null,
  "model": null,
  "name": null,
  "opensTurn": null,
  "operation": null,
  "origin": null,
  "outcome": null,
  "outputTokens": null,
  "parentSpanId": null,
  "provider": null,
  "recovered": null,
  "requestId": null,
  "spanId": null,
  "startTime": null,
  "toolCallId": null,
  "toolName": null,
  "toolType": null,
} satisfies SpanPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SpanPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


