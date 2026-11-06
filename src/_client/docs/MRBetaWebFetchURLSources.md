
# MRBetaWebFetchURLSources

Which sources contribute to the set of URLs web fetch may fetch.  Each key is a tagged variant: ``user_input`` is ``all`` or ``none``; the two tool filters are ``all``, ``none``, ``only`` (only the named tools\' results) or ``except`` (every result but the named tools\'). A named tool must be declared in this request\'s ``tools[]``.

## Properties

Name | Type
------------ | -------------
`clientToolResults` | [ClientToolResults](ClientToolResults.md)
`serverToolResults` | [ServerToolResults](ServerToolResults.md)
`userInput` | [UserInput](UserInput.md)

## Example

```typescript
import type { MRBetaWebFetchURLSources } from ''

// TODO: Update the object below with actual values
const example = {
  "clientToolResults": null,
  "serverToolResults": null,
  "userInput": null,
} satisfies MRBetaWebFetchURLSources

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MRBetaWebFetchURLSources
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


