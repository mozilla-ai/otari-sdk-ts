
# WorkspaceMcpServerAccess

A stored server\'s access list: what everyone may call, and the exceptions for keys and users.  A key\'s own grant decides over its owner\'s, and either decides over ``everyone_tools``. The server\'s ``allowed_tools`` is a ceiling over all of them.

## Properties

Name | Type
------------ | -------------
`everyoneTools` | Array&lt;string&gt;
`grants` | [Array&lt;WorkspaceMcpServerGrantPublic&gt;](WorkspaceMcpServerGrantPublic.md)

## Example

```typescript
import type { WorkspaceMcpServerAccess } from ''

// TODO: Update the object below with actual values
const example = {
  "everyoneTools": null,
  "grants": null,
} satisfies WorkspaceMcpServerAccess

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMcpServerAccess
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


