
# SendTestMailResponse

The outcome of one test send.  ``reason`` carries the transport\'s own error text, which is the whole value of a test button (an operator needs to know it was a refused login rather than a wrong port). Safe here and only here: this endpoint is master-key gated, unlike the public error paths that must not leak internals.

## Properties

Name | Type
------------ | -------------
`ok` | boolean
`reason` | string
`transport` | string

## Example

```typescript
import type { SendTestMailResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "ok": null,
  "reason": null,
  "transport": null,
} satisfies SendTestMailResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SendTestMailResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


