
# HostedModelsPublic

A page of one hosted provider\'s offered models, and how many there are in total.  ``count`` is the total of the kind asked for, and ``type_counts`` how many of each kind the provider offers, ``unknown`` for a model of no known kind.

## Properties

Name | Type
------------ | -------------
`count` | number
`data` | [Array&lt;HostedModelPublic&gt;](HostedModelPublic.md)
`typeCounts` | { [key: string]: number; }

## Example

```typescript
import type { HostedModelsPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "data": null,
  "typeCounts": null,
} satisfies HostedModelsPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HostedModelsPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


