
# PlaygroundAttachment

A file one turn sent, as the page draws its chip and sends it again.  A record of the attachment rather than a reference the gateway keeps alive: the file can be deleted after the save, and a resumed turn that sends it then does not send its contents.

## Properties

Name | Type
------------ | -------------
`bytes` | number
`fileId` | string
`filename` | string

## Example

```typescript
import type { PlaygroundAttachment } from ''

// TODO: Update the object below with actual values
const example = {
  "bytes": null,
  "fileId": null,
  "filename": null,
} satisfies PlaygroundAttachment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundAttachment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


