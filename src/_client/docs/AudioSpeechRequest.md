
# AudioSpeechRequest

OpenAI-compatible audio speech (TTS) request.  The speech fields are derived from any-llm\'s ``AudioSpeechParams`` (see ``_schema_derive``) so the schema cannot silently drop a param any-llm forwards. ``user`` is gateway-only (billing / auth scoping); it is not an any-llm param and is stripped before the request is forwarded.

## Properties

Name | Type
------------ | -------------
`input` | string
`instructions` | string
`model` | string
`responseFormat` | string
`speed` | number
`user` | string
`voice` | string

## Example

```typescript
import type { AudioSpeechRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "input": null,
  "instructions": null,
  "model": null,
  "responseFormat": null,
  "speed": null,
  "user": null,
  "voice": null,
} satisfies AudioSpeechRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudioSpeechRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


