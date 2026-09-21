
# MemberAttributionPublic

What the gateway identity behind a membership has spent, and may reach.  Deployment-wide facts, so they are withheld from a caller who does not operate the deployment rather than zeroed: ``/api/v1/users`` refuses them, and a zero here would read as a member who has spent nothing.

## Properties

Name | Type
------------ | -------------
`allowedModels` | Array&lt;string&gt;
`blocked` | boolean
`reserved` | number
`spend` | number

## Example

```typescript
import type { MemberAttributionPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "allowedModels": null,
  "blocked": null,
  "reserved": null,
  "spend": null,
} satisfies MemberAttributionPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MemberAttributionPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


