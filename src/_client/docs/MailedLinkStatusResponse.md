
# MailedLinkStatusResponse

Whether the link can still be used. Checking it does not use it.

## Properties

Name | Type
------------ | -------------
`status` | [MailedLinkStatus](MailedLinkStatus.md)

## Example

```typescript
import type { MailedLinkStatusResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "status": null,
} satisfies MailedLinkStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailedLinkStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


