
# PlaygroundToolStatus

Whether one gateway-run tool can be attached right now, and why not.  Three states from two fields, which is what the composer\'s menu draws: a tool the deployment never configured is not offered, one the deployment configured and this workspace turned off is shown disabled with the reason, and an available one is a plain checkbox. A single boolean would collapse the first two, which is how a checkbox comes to look attachable and then fail at request time (otari-ai#1419).

## Properties

Name | Type
------------ | -------------
`configured` | boolean
`enabled` | boolean
`reason` | string

## Example

```typescript
import type { PlaygroundToolStatus } from ''

// TODO: Update the object below with actual values
const example = {
  "configured": null,
  "enabled": null,
  "reason": null,
} satisfies PlaygroundToolStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlaygroundToolStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


