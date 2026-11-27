
# MailReadiness

Whether this deployment is configured to put a link into somebody\'s inbox.  The members are exclusive and cover every deployment. ``none`` means no message is sent at all. ``delivers`` means a message is sent to the address it names, which is what the configuration permits rather than what a mail server went on to do with it. Whether a send succeeds is :meth:`Mailer.send`\'s answer, once.  NOTE: An operator confirms a real end-to-end delivery through the mail test surface. This value never stands for a send that has been tried.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { MailReadiness } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies MailReadiness

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailReadiness
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


