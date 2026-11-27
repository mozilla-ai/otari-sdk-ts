
# MRBetaWebFetchURLSourceExcept

The tool filter variant under which every result but the named tools\' contributes.

## Properties

Name | Type
------------ | -------------
`tools` | [Array&lt;MRBetaWebFetchURLSourceToolReference&gt;](MRBetaWebFetchURLSourceToolReference.md)
`type` | string

## Example

```typescript
import type { MRBetaWebFetchURLSourceExcept } from ''

// TODO: Update the object below with actual values
const example = {
  "tools": null,
  "type": null,
} satisfies MRBetaWebFetchURLSourceExcept

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaWebFetchURLSourceExcept
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


