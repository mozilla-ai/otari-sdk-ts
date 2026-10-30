
# MailedLinkStatus

Whether a mailed verification or password reset link can still be used.  NOTE: ``INVALID`` covers a link that was never issued and one already used, because a used link\'s hash is gone.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { MailedLinkStatus } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies MailedLinkStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailedLinkStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


